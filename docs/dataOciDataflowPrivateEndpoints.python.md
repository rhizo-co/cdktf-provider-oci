# `dataOciDataflowPrivateEndpoints` Submodule <a name="`dataOciDataflowPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowPrivateEndpoints <a name="DataOciDataflowPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints oci_dataflow_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints(
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
  display_name: str = None,
  display_name_starts_with: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]] = None,
  id: str = None,
  owner_principal_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.displayNameStartsWith">display_name_starts_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}.

---

##### `display_name_starts_with`<sup>Optional</sup> <a name="display_name_starts_with" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.displayNameStartsWith"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#filter DataOciDataflowPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_principal_id`<sup>Optional</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.ownerPrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayNameStartsWith">reset_display_name_starts_with</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOwnerPrincipalId">reset_owner_principal_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_starts_with` <a name="reset_display_name_starts_with" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayNameStartsWith"></a>

```python
def reset_display_name_starts_with() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner_principal_id` <a name="reset_owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOwnerPrincipalId"></a>

```python
def reset_owner_principal_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataflowPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataflowPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataflowPrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataflowPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList">DataOciDataflowPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.privateEndpointCollection">private_endpoint_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWithInput">display_name_starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalIdInput">owner_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWith">display_name_starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filter"></a>

```python
filter: DataOciDataflowPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList">DataOciDataflowPrivateEndpointsFilterList</a>

---

##### `private_endpoint_collection`<sup>Required</sup> <a name="private_endpoint_collection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.privateEndpointCollection"></a>

```python
private_endpoint_collection: DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `display_name_starts_with_input`<sup>Optional</sup> <a name="display_name_starts_with_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWithInput"></a>

```python
display_name_starts_with_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_principal_id_input`<sup>Optional</sup> <a name="owner_principal_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalIdInput"></a>

```python
owner_principal_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_starts_with`<sup>Required</sup> <a name="display_name_starts_with" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWith"></a>

```python
display_name_starts_with: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowPrivateEndpointsConfig <a name="DataOciDataflowPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  display_name_starts_with: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]] = None,
  id: str = None,
  owner_principal_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayNameStartsWith">display_name_starts_with</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}.

---

##### `display_name_starts_with`<sup>Optional</sup> <a name="display_name_starts_with" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayNameStartsWith"></a>

```python
display_name_starts_with: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#filter DataOciDataflowPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner_principal_id`<sup>Optional</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}.

---

### DataOciDataflowPrivateEndpointsFilter <a name="DataOciDataflowPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#name DataOciDataflowPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#values DataOciDataflowPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#regex DataOciDataflowPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#name DataOciDataflowPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#values DataOciDataflowPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#regex DataOciDataflowPrivateEndpoints#regex}.

---

### DataOciDataflowPrivateEndpointsPrivateEndpointCollection <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection()
```


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems()
```


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowPrivateEndpointsFilterList <a name="DataOciDataflowPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataflowPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataflowPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]]

---


### DataOciDataflowPrivateEndpointsFilterOutputReference <a name="DataOciDataflowPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataflowPrivateEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter">DataOciDataflowPrivateEndpointsFilter</a>]

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.maxHostCount">max_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.scanDetails">scan_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `max_host_count`<sup>Required</sup> <a name="max_host_count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.maxHostCount"></a>

```python
max_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `scan_details`<sup>Required</sup> <a name="scan_details" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.scanDetails"></a>

```python
scan_details: DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems</a>

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails</a>

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoints

dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection">DataOciDataflowPrivateEndpointsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items"></a>

```python
items: DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataflowPrivateEndpointsPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection">DataOciDataflowPrivateEndpointsPrivateEndpointCollection</a>

---



