# `bdsBdsInstanceOperationCertificateManagementsManagement` Submodule <a name="`bdsBdsInstanceOperationCertificateManagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOperationCertificateManagementsManagement <a name="BdsBdsInstanceOperationCertificateManagementsManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management oci_bds_bds_instance_operation_certificate_managements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  enable_operation_certificate_management: typing.Union[bool, IResolvable],
  renew_operation_certificate_management: typing.Union[bool, IResolvable],
  services: typing.List[str],
  host_cert_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]] = None,
  id: str = None,
  root_certificate: str = None,
  server_key_password: str = None,
  timeouts: BdsBdsInstanceOperationCertificateManagementsManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.enableOperationCertificateManagement">enable_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.renewOperationCertificateManagement">renew_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.hostCertDetails">host_cert_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]</code> | host_cert_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.rootCertificate">root_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.serverKeyPassword">server_key_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}.

---

##### `enable_operation_certificate_management`<sup>Required</sup> <a name="enable_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.enableOperationCertificateManagement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}.

---

##### `renew_operation_certificate_management`<sup>Required</sup> <a name="renew_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.renewOperationCertificateManagement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}.

---

##### `services`<sup>Required</sup> <a name="services" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.services"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}.

---

##### `host_cert_details`<sup>Optional</sup> <a name="host_cert_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.hostCertDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]

host_cert_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_cert_details BdsBdsInstanceOperationCertificateManagementsManagement#host_cert_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.rootCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}.

---

##### `server_key_password`<sup>Optional</sup> <a name="server_key_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.serverKeyPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#timeouts BdsBdsInstanceOperationCertificateManagementsManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails">put_host_cert_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetHostCertDetails">reset_host_cert_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetRootCertificate">reset_root_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetServerKeyPassword">reset_server_key_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_host_cert_details` <a name="put_host_cert_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails"></a>

```python
def put_host_cert_details(
  value: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#create BdsBdsInstanceOperationCertificateManagementsManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#delete BdsBdsInstanceOperationCertificateManagementsManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#update BdsBdsInstanceOperationCertificateManagementsManagement#update}.

---

##### `reset_host_cert_details` <a name="reset_host_cert_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetHostCertDetails"></a>

```python
def reset_host_cert_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_root_certificate` <a name="reset_root_certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetRootCertificate"></a>

```python
def reset_root_certificate() -> None
```

##### `reset_server_key_password` <a name="reset_server_key_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetServerKeyPassword"></a>

```python
def reset_server_key_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOperationCertificateManagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsBdsInstanceOperationCertificateManagementsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsBdsInstanceOperationCertificateManagementsManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsBdsInstanceOperationCertificateManagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOperationCertificateManagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetails">host_cert_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference">BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagementInput">enable_operation_certificate_management_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetailsInput">host_cert_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagementInput">renew_operation_certificate_management_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificateInput">root_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPasswordInput">server_key_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagement">enable_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagement">renew_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificate">root_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPassword">server_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_cert_details`<sup>Required</sup> <a name="host_cert_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetails"></a>

```python
host_cert_details: BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference">BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `enable_operation_certificate_management_input`<sup>Optional</sup> <a name="enable_operation_certificate_management_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagementInput"></a>

```python
enable_operation_certificate_management_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_cert_details_input`<sup>Optional</sup> <a name="host_cert_details_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetailsInput"></a>

```python
host_cert_details_input: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `renew_operation_certificate_management_input`<sup>Optional</sup> <a name="renew_operation_certificate_management_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagementInput"></a>

```python
renew_operation_certificate_management_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_certificate_input`<sup>Optional</sup> <a name="root_certificate_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificateInput"></a>

```python
root_certificate_input: str
```

- *Type:* str

---

##### `server_key_password_input`<sup>Optional</sup> <a name="server_key_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPasswordInput"></a>

```python
server_key_password_input: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsBdsInstanceOperationCertificateManagementsManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `enable_operation_certificate_management`<sup>Required</sup> <a name="enable_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagement"></a>

```python
enable_operation_certificate_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `renew_operation_certificate_management`<sup>Required</sup> <a name="renew_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagement"></a>

```python
renew_operation_certificate_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_certificate`<sup>Required</sup> <a name="root_certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificate"></a>

```python
root_certificate: str
```

- *Type:* str

---

##### `server_key_password`<sup>Required</sup> <a name="server_key_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPassword"></a>

```python
server_key_password: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOperationCertificateManagementsManagementConfig <a name="BdsBdsInstanceOperationCertificateManagementsManagementConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  enable_operation_certificate_management: typing.Union[bool, IResolvable],
  renew_operation_certificate_management: typing.Union[bool, IResolvable],
  services: typing.List[str],
  host_cert_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]] = None,
  id: str = None,
  root_certificate: str = None,
  server_key_password: str = None,
  timeouts: BdsBdsInstanceOperationCertificateManagementsManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.enableOperationCertificateManagement">enable_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.renewOperationCertificateManagement">renew_operation_certificate_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.hostCertDetails">host_cert_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]</code> | host_cert_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.rootCertificate">root_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.serverKeyPassword">server_key_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}.

---

##### `enable_operation_certificate_management`<sup>Required</sup> <a name="enable_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.enableOperationCertificateManagement"></a>

```python
enable_operation_certificate_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}.

---

##### `renew_operation_certificate_management`<sup>Required</sup> <a name="renew_operation_certificate_management" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.renewOperationCertificateManagement"></a>

```python
renew_operation_certificate_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}.

---

##### `services`<sup>Required</sup> <a name="services" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}.

---

##### `host_cert_details`<sup>Optional</sup> <a name="host_cert_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.hostCertDetails"></a>

```python
host_cert_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]

host_cert_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_cert_details BdsBdsInstanceOperationCertificateManagementsManagement#host_cert_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.rootCertificate"></a>

```python
root_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}.

---

##### `server_key_password`<sup>Optional</sup> <a name="server_key_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.serverKeyPassword"></a>

```python
server_key_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceOperationCertificateManagementsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#timeouts BdsBdsInstanceOperationCertificateManagementsManagement#timeouts}

---

### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails(
  certificate: str = None,
  host_name: str = None,
  private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#certificate BdsBdsInstanceOperationCertificateManagementsManagement#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_name BdsBdsInstanceOperationCertificateManagementsManagement#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#private_key BdsBdsInstanceOperationCertificateManagementsManagement#private_key}. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#certificate BdsBdsInstanceOperationCertificateManagementsManagement#certificate}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_name BdsBdsInstanceOperationCertificateManagementsManagement#host_name}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#private_key BdsBdsInstanceOperationCertificateManagementsManagement#private_key}.

---

### BdsBdsInstanceOperationCertificateManagementsManagementTimeouts <a name="BdsBdsInstanceOperationCertificateManagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#create BdsBdsInstanceOperationCertificateManagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#delete BdsBdsInstanceOperationCertificateManagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#update BdsBdsInstanceOperationCertificateManagementsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#create BdsBdsInstanceOperationCertificateManagementsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#delete BdsBdsInstanceOperationCertificateManagementsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#update BdsBdsInstanceOperationCertificateManagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]]

---


### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails</a>]

---


### BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference <a name="BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_operation_certificate_managements_management

bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceOperationCertificateManagementsManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>]

---



