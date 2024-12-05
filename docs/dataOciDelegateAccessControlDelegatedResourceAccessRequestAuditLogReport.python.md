# `dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report oci_delegate_access_control_delegated_resource_access_request_audit_log_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  id: str = None,
  is_process_tree_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.isProcessTreeEnabled">is_process_tree_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.delegatedResourceAccessRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_process_tree_enabled`<sup>Optional</sup> <a name="is_process_tree_enabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.isProcessTreeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled">reset_is_process_tree_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_process_tree_enabled` <a name="reset_is_process_tree_enabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled"></a>

```python
def reset_is_process_tree_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus">audit_report_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree">process_tree</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report">report</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated">time_report_generated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput">delegated_resource_access_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput">is_process_tree_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled">is_process_tree_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `audit_report_status`<sup>Required</sup> <a name="audit_report_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus"></a>

```python
audit_report_status: str
```

- *Type:* str

---

##### `process_tree`<sup>Required</sup> <a name="process_tree" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree"></a>

```python
process_tree: str
```

- *Type:* str

---

##### `report`<sup>Required</sup> <a name="report" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report"></a>

```python
report: str
```

- *Type:* str

---

##### `time_report_generated`<sup>Required</sup> <a name="time_report_generated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated"></a>

```python
time_report_generated: str
```

- *Type:* str

---

##### `delegated_resource_access_request_id_input`<sup>Optional</sup> <a name="delegated_resource_access_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput"></a>

```python
delegated_resource_access_request_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_process_tree_enabled_input`<sup>Optional</sup> <a name="is_process_tree_enabled_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput"></a>

```python
is_process_tree_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_process_tree_enabled`<sup>Required</sup> <a name="is_process_tree_enabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled"></a>

```python
is_process_tree_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_audit_log_report

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  id: str = None,
  is_process_tree_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled">is_process_tree_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_process_tree_enabled`<sup>Optional</sup> <a name="is_process_tree_enabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled"></a>

```python
is_process_tree_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}.

---



