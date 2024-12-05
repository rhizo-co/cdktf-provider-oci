# `operatorAccessControlOperatorControlAssignment` Submodule <a name="`operatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControlAssignment <a name="OperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  is_enforced_always: typing.Union[bool, IResolvable],
  operator_control_id: str,
  resource_compartment_id: str,
  resource_id: str,
  resource_name: str,
  resource_type: str,
  comment: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_approve_during_maintenance: typing.Union[bool, IResolvable] = None,
  is_hypervisor_log_forwarded: typing.Union[bool, IResolvable] = None,
  is_log_forwarded: typing.Union[bool, IResolvable] = None,
  remote_syslog_server_address: str = None,
  remote_syslog_server_ca_cert: str = None,
  remote_syslog_server_port: typing.Union[int, float] = None,
  time_assignment_from: str = None,
  time_assignment_to: str = None,
  timeouts: OperatorAccessControlOperatorControlAssignmentTimeouts = None,
  validate_assignment_trigger: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isEnforcedAlways">is_enforced_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.operatorControlId">operator_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isHypervisorLogForwarded">is_hypervisor_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isLogForwarded">is_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerAddress">remote_syslog_server_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerCaCert">remote_syslog_server_ca_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerPort">remote_syslog_server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeAssignmentFrom">time_assignment_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeAssignmentTo">time_assignment_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.validateAssignmentTrigger">validate_assignment_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}.

---

##### `is_enforced_always`<sup>Required</sup> <a name="is_enforced_always" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isEnforcedAlways"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}.

---

##### `operator_control_id`<sup>Required</sup> <a name="operator_control_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.operatorControlId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}.

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}.

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_approve_during_maintenance`<sup>Optional</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isAutoApproveDuringMaintenance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}.

---

##### `is_hypervisor_log_forwarded`<sup>Optional</sup> <a name="is_hypervisor_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isHypervisorLogForwarded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}.

---

##### `is_log_forwarded`<sup>Optional</sup> <a name="is_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.isLogForwarded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}.

---

##### `remote_syslog_server_address`<sup>Optional</sup> <a name="remote_syslog_server_address" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}.

---

##### `remote_syslog_server_ca_cert`<sup>Optional</sup> <a name="remote_syslog_server_ca_cert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerCaCert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}.

---

##### `remote_syslog_server_port`<sup>Optional</sup> <a name="remote_syslog_server_port" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.remoteSyslogServerPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}.

---

##### `time_assignment_from`<sup>Optional</sup> <a name="time_assignment_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeAssignmentFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}.

---

##### `time_assignment_to`<sup>Optional</sup> <a name="time_assignment_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeAssignmentTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}

---

##### `validate_assignment_trigger`<sup>Optional</sup> <a name="validate_assignment_trigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.validateAssignmentTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance">reset_is_auto_approve_during_maintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded">reset_is_hypervisor_log_forwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded">reset_is_log_forwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress">reset_remote_syslog_server_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert">reset_remote_syslog_server_ca_cert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort">reset_remote_syslog_server_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom">reset_time_assignment_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo">reset_time_assignment_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger">reset_validate_assignment_trigger</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}.

---

##### `reset_comment` <a name="reset_comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_auto_approve_during_maintenance` <a name="reset_is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance"></a>

```python
def reset_is_auto_approve_during_maintenance() -> None
```

##### `reset_is_hypervisor_log_forwarded` <a name="reset_is_hypervisor_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded"></a>

```python
def reset_is_hypervisor_log_forwarded() -> None
```

##### `reset_is_log_forwarded` <a name="reset_is_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded"></a>

```python
def reset_is_log_forwarded() -> None
```

##### `reset_remote_syslog_server_address` <a name="reset_remote_syslog_server_address" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress"></a>

```python
def reset_remote_syslog_server_address() -> None
```

##### `reset_remote_syslog_server_ca_cert` <a name="reset_remote_syslog_server_ca_cert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert"></a>

```python
def reset_remote_syslog_server_ca_cert() -> None
```

##### `reset_remote_syslog_server_port` <a name="reset_remote_syslog_server_port" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort"></a>

```python
def reset_remote_syslog_server_port() -> None
```

##### `reset_time_assignment_from` <a name="reset_time_assignment_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom"></a>

```python
def reset_time_assignment_from() -> None
```

##### `reset_time_assignment_to` <a name="reset_time_assignment_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo"></a>

```python
def reset_time_assignment_to() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validate_assignment_trigger` <a name="reset_validate_assignment_trigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger"></a>

```python
def reset_validate_assignment_trigger() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OperatorAccessControlOperatorControlAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId">assigner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription">detachment_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode">error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">is_default_assignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName">op_control_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">time_of_assignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId">unassigner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput">is_auto_approve_during_maintenance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput">is_enforced_always_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput">is_hypervisor_log_forwarded_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput">is_log_forwarded_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput">operator_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput">remote_syslog_server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput">remote_syslog_server_ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput">remote_syslog_server_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput">resource_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput">time_assignment_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput">time_assignment_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput">validate_assignment_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">is_enforced_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">is_hypervisor_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded">is_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId">operator_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">remote_syslog_server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">remote_syslog_server_ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">remote_syslog_server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">time_assignment_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">time_assignment_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">validate_assignment_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assigner_id`<sup>Required</sup> <a name="assigner_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```python
assigner_id: str
```

- *Type:* str

---

##### `detachment_description`<sup>Required</sup> <a name="detachment_description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```python
detachment_description: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```python
error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `is_default_assignment`<sup>Required</sup> <a name="is_default_assignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```python
is_default_assignment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `op_control_name`<sup>Required</sup> <a name="op_control_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```python
op_control_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_of_assignment`<sup>Required</sup> <a name="time_of_assignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```python
time_of_assignment: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts"></a>

```python
timeouts: OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a>

---

##### `unassigner_id`<sup>Required</sup> <a name="unassigner_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```python
unassigner_id: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_auto_approve_during_maintenance_input`<sup>Optional</sup> <a name="is_auto_approve_during_maintenance_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput"></a>

```python
is_auto_approve_during_maintenance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enforced_always_input`<sup>Optional</sup> <a name="is_enforced_always_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput"></a>

```python
is_enforced_always_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hypervisor_log_forwarded_input`<sup>Optional</sup> <a name="is_hypervisor_log_forwarded_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput"></a>

```python
is_hypervisor_log_forwarded_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_log_forwarded_input`<sup>Optional</sup> <a name="is_log_forwarded_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput"></a>

```python
is_log_forwarded_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_control_id_input`<sup>Optional</sup> <a name="operator_control_id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput"></a>

```python
operator_control_id_input: str
```

- *Type:* str

---

##### `remote_syslog_server_address_input`<sup>Optional</sup> <a name="remote_syslog_server_address_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput"></a>

```python
remote_syslog_server_address_input: str
```

- *Type:* str

---

##### `remote_syslog_server_ca_cert_input`<sup>Optional</sup> <a name="remote_syslog_server_ca_cert_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput"></a>

```python
remote_syslog_server_ca_cert_input: str
```

- *Type:* str

---

##### `remote_syslog_server_port_input`<sup>Optional</sup> <a name="remote_syslog_server_port_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput"></a>

```python
remote_syslog_server_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_compartment_id_input`<sup>Optional</sup> <a name="resource_compartment_id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput"></a>

```python
resource_compartment_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `time_assignment_from_input`<sup>Optional</sup> <a name="time_assignment_from_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput"></a>

```python
time_assignment_from_input: str
```

- *Type:* str

---

##### `time_assignment_to_input`<sup>Optional</sup> <a name="time_assignment_to_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput"></a>

```python
time_assignment_to_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OperatorAccessControlOperatorControlAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>]

---

##### `validate_assignment_trigger_input`<sup>Optional</sup> <a name="validate_assignment_trigger_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput"></a>

```python
validate_assignment_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approve_during_maintenance`<sup>Required</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```python
is_auto_approve_during_maintenance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enforced_always`<sup>Required</sup> <a name="is_enforced_always" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```python
is_enforced_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hypervisor_log_forwarded`<sup>Required</sup> <a name="is_hypervisor_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```python
is_hypervisor_log_forwarded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_log_forwarded`<sup>Required</sup> <a name="is_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```python
is_log_forwarded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_control_id`<sup>Required</sup> <a name="operator_control_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```python
operator_control_id: str
```

- *Type:* str

---

##### `remote_syslog_server_address`<sup>Required</sup> <a name="remote_syslog_server_address" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```python
remote_syslog_server_address: str
```

- *Type:* str

---

##### `remote_syslog_server_ca_cert`<sup>Required</sup> <a name="remote_syslog_server_ca_cert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```python
remote_syslog_server_ca_cert: str
```

- *Type:* str

---

##### `remote_syslog_server_port`<sup>Required</sup> <a name="remote_syslog_server_port" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```python
remote_syslog_server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `time_assignment_from`<sup>Required</sup> <a name="time_assignment_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```python
time_assignment_from: str
```

- *Type:* str

---

##### `time_assignment_to`<sup>Required</sup> <a name="time_assignment_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```python
time_assignment_to: str
```

- *Type:* str

---

##### `validate_assignment_trigger`<sup>Required</sup> <a name="validate_assignment_trigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```python
validate_assignment_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlAssignmentConfig <a name="OperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  is_enforced_always: typing.Union[bool, IResolvable],
  operator_control_id: str,
  resource_compartment_id: str,
  resource_id: str,
  resource_name: str,
  resource_type: str,
  comment: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_approve_during_maintenance: typing.Union[bool, IResolvable] = None,
  is_hypervisor_log_forwarded: typing.Union[bool, IResolvable] = None,
  is_log_forwarded: typing.Union[bool, IResolvable] = None,
  remote_syslog_server_address: str = None,
  remote_syslog_server_ca_cert: str = None,
  remote_syslog_server_port: typing.Union[int, float] = None,
  time_assignment_from: str = None,
  time_assignment_to: str = None,
  timeouts: OperatorAccessControlOperatorControlAssignmentTimeouts = None,
  validate_assignment_trigger: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways">is_enforced_always</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId">operator_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded">is_hypervisor_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded">is_log_forwarded</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress">remote_syslog_server_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert">remote_syslog_server_ca_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort">remote_syslog_server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom">time_assignment_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo">time_assignment_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger">validate_assignment_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}.

---

##### `is_enforced_always`<sup>Required</sup> <a name="is_enforced_always" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways"></a>

```python
is_enforced_always: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}.

---

##### `operator_control_id`<sup>Required</sup> <a name="operator_control_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId"></a>

```python
operator_control_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}.

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}.

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_approve_during_maintenance`<sup>Optional</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance"></a>

```python
is_auto_approve_during_maintenance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}.

---

##### `is_hypervisor_log_forwarded`<sup>Optional</sup> <a name="is_hypervisor_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded"></a>

```python
is_hypervisor_log_forwarded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}.

---

##### `is_log_forwarded`<sup>Optional</sup> <a name="is_log_forwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded"></a>

```python
is_log_forwarded: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}.

---

##### `remote_syslog_server_address`<sup>Optional</sup> <a name="remote_syslog_server_address" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress"></a>

```python
remote_syslog_server_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}.

---

##### `remote_syslog_server_ca_cert`<sup>Optional</sup> <a name="remote_syslog_server_ca_cert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert"></a>

```python
remote_syslog_server_ca_cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}.

---

##### `remote_syslog_server_port`<sup>Optional</sup> <a name="remote_syslog_server_port" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort"></a>

```python
remote_syslog_server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}.

---

##### `time_assignment_from`<sup>Optional</sup> <a name="time_assignment_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom"></a>

```python
time_assignment_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}.

---

##### `time_assignment_to`<sup>Optional</sup> <a name="time_assignment_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo"></a>

```python
time_assignment_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts"></a>

```python
timeouts: OperatorAccessControlOperatorControlAssignmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}

---

##### `validate_assignment_trigger`<sup>Optional</sup> <a name="validate_assignment_trigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger"></a>

```python
validate_assignment_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}.

---

### OperatorAccessControlOperatorControlAssignmentTimeouts <a name="OperatorAccessControlOperatorControlAssignmentTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control_assignment

operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OperatorAccessControlOperatorControlAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>]

---



