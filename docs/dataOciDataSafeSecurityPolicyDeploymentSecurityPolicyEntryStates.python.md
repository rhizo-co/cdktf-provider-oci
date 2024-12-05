# `dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule <a name="`dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states oci_data_safe_security_policy_deployment_security_policy_entry_states}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates(
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
  deployment_status: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]] = None,
  id: str = None,
  security_policy_entry_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.deploymentStatus">deployment_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.securityPolicyEntryId">security_policy_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.securityPolicyDeploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}.

---

##### `deployment_status`<sup>Optional</sup> <a name="deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.deploymentStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#filter DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_entry_id`<sup>Optional</sup> <a name="security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.Initializer.parameter.securityPolicyEntryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus">reset_deployment_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId">reset_security_policy_entry_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]

---

##### `reset_deployment_status` <a name="reset_deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetDeploymentStatus"></a>

```python
def reset_deployment_status() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_policy_entry_id` <a name="reset_security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.resetSecurityPolicyEntryId"></a>

```python
def reset_security_policy_entry_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection">security_policy_entry_state_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput">deployment_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput">security_policy_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput">security_policy_entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId">security_policy_entry_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filter"></a>

```python
filter: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList</a>

---

##### `security_policy_entry_state_collection`<sup>Required</sup> <a name="security_policy_entry_state_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryStateCollection"></a>

```python
security_policy_entry_state_collection: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList</a>

---

##### `deployment_status_input`<sup>Optional</sup> <a name="deployment_status_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatusInput"></a>

```python
deployment_status_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_deployment_id_input`<sup>Optional</sup> <a name="security_policy_deployment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentIdInput"></a>

```python
security_policy_deployment_id_input: str
```

- *Type:* str

---

##### `security_policy_entry_id_input`<sup>Optional</sup> <a name="security_policy_entry_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryIdInput"></a>

```python
security_policy_entry_id_input: str
```

- *Type:* str

---

##### `deployment_status`<sup>Required</sup> <a name="deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyDeploymentId"></a>

```python
security_policy_deployment_id: str
```

- *Type:* str

---

##### `security_policy_entry_id`<sup>Required</sup> <a name="security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.securityPolicyEntryId"></a>

```python
security_policy_entry_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_policy_deployment_id: str,
  deployment_status: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]] = None,
  id: str = None,
  security_policy_entry_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId">security_policy_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyDeploymentId"></a>

```python
security_policy_deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_deployment_id}.

---

##### `deployment_status`<sup>Optional</sup> <a name="deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#deployment_status DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#deployment_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#filter DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_entry_id`<sup>Optional</sup> <a name="security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesConfig.property.securityPolicyEntryId"></a>

```python
security_policy_entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#security_policy_entry_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#security_policy_entry_id}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#name DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#values DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_states#regex DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates#regex}.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection()
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems()
```


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]]

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesFilter</a>]

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType">entry_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated">time_generated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

---

##### `time_generated`<sup>Required</sup> <a name="time_generated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeGenerated"></a>

```python
time_generated: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetails</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails">entry_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId">security_policy_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId">security_policy_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_status`<sup>Required</sup> <a name="deployment_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

---

##### `entry_details`<sup>Required</sup> <a name="entry_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.entryDetails"></a>

```python
entry_details: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsEntryDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_deployment_id`<sup>Required</sup> <a name="security_policy_deployment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyDeploymentId"></a>

```python
security_policy_deployment_id: str
```

- *Type:* str

---

##### `security_policy_entry_id`<sup>Required</sup> <a name="security_policy_entry_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.securityPolicyEntryId"></a>

```python
security_policy_entry_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_deployment_security_policy_entry_states

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStates.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStatesSecurityPolicyEntryStateCollection</a>

---



