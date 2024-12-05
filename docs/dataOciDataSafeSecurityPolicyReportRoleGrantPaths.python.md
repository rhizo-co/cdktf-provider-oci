# `dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule <a name="`dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPaths <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPaths" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  granted_role: str,
  grantee: str,
  security_policy_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.grantedRole">granted_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.grantee">grantee</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `granted_role`<sup>Required</sup> <a name="granted_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.grantedRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}.

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.grantee"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReportRoleGrantPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection">role_grant_path_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput">granted_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput">grantee_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole">granted_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter"></a>

```python
filter: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a>

---

##### `role_grant_path_collection`<sup>Required</sup> <a name="role_grant_path_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection"></a>

```python
role_grant_path_collection: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]

---

##### `granted_role_input`<sup>Optional</sup> <a name="granted_role_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput"></a>

```python
granted_role_input: str
```

- *Type:* str

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput"></a>

```python
grantee_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `granted_role`<sup>Required</sup> <a name="granted_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole"></a>

```python
granted_role: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  granted_role: str,
  grantee: str,
  security_policy_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole">granted_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee">grantee</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `granted_role`<sup>Required</sup> <a name="granted_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole"></a>

```python
granted_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}.

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}.

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection()
```


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]]

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>]

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel">depth_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole">granted_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee">grantee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depth_level`<sup>Required</sup> <a name="depth_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel"></a>

```python
depth_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `granted_role`<sup>Required</sup> <a name="granted_role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole"></a>

```python
granted_role: str
```

- *Type:* str

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee"></a>

```python
grantee: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_report_role_grant_paths

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a>

---



