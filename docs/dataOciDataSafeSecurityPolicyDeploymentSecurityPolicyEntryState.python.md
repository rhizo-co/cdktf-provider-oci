# `dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState` Submodule <a name="`dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state oci_data_safe_security_policy_deployment_security_policy_entry_state}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_deployment_id: str,
  security_policy_entry_state_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.securityPolicyEntryStateId">security_policy_entry_state_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.securityPolicyDeploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}.

---

##### `security_policy_entry_state_id`<sup>Required</sup> <a name="security_policy_entry_state_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.securityPolicyEntryStateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.entryDetails">entry_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryId">security_policy_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentIdInput">security_policy_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateIdInput">security_policy_entry_state_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateId">security_policy_entry_state_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deployment_status`<sup>Required</sup> <a name="deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

---

##### `entry_details`<sup>Required</sup> <a name="entry_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.entryDetails"></a>

```python
entry_details: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList</a>

---

##### `security_policy_entry_id`<sup>Required</sup> <a name="security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryId"></a>

```python
security_policy_entry_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_deployment_id_input`<sup>Optional</sup> <a name="security_policy_deployment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentIdInput"></a>

```python
security_policy_deployment_id_input: str
```

- *Type:* str

---

##### `security_policy_entry_state_id_input`<sup>Optional</sup> <a name="security_policy_entry_state_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateIdInput"></a>

```python
security_policy_entry_state_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentId"></a>

```python
security_policy_deployment_id: str
```

- *Type:* str

---

##### `security_policy_entry_state_id`<sup>Required</sup> <a name="security_policy_entry_state_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateId"></a>

```python
security_policy_entry_state_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_deployment_id: str,
  security_policy_entry_state_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyEntryStateId">security_policy_entry_state_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyDeploymentId"></a>

```python
security_policy_deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}.

---

##### `security_policy_entry_state_id`<sup>Required</sup> <a name="security_policy_entry_state_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyEntryStateId"></a>

```python
security_policy_entry_state_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_state

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.entryType">entry_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeGenerated">time_generated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

---

##### `time_generated`<sup>Required</sup> <a name="time_generated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeGenerated"></a>

```python
time_generated: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails</a>

---



