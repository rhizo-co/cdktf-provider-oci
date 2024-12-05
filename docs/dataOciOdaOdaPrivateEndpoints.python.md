# `dataOciOdaOdaPrivateEndpoints` Submodule <a name="`dataOciOdaOdaPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpoints <a name="DataOciOdaOdaPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints oci_oda_oda_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#filter DataOciOdaOdaPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOdaOdaPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection">oda_private_endpoint_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter"></a>

```python
filter: DataOciOdaOdaPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a>

---

##### `oda_private_endpoint_collection`<sup>Required</sup> <a name="oda_private_endpoint_collection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection"></a>

```python
oda_private_endpoint_collection: DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointsConfig <a name="DataOciOdaOdaPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#filter DataOciOdaOdaPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}.

---

### DataOciOdaOdaPrivateEndpointsFilter <a name="DataOciOdaOdaPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}.

---

### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection()
```


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointsFilterList <a name="DataOciOdaOdaPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]]

---


### DataOciOdaOdaPrivateEndpointsFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOdaOdaPrivateEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>]

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoints

dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items"></a>

```python
items: DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a>

---



