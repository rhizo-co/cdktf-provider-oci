# `dataOciDatacatalogCatalogPrivateEndpoints` Submodule <a name="`dataOciDatacatalogCatalogPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatacatalogCatalogPrivateEndpoints <a name="DataOciDatacatalogCatalogPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints oci_datacatalog_catalog_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#filter DataOciDatacatalogCatalogPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatacatalogCatalogPrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatacatalogCatalogPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatacatalogCatalogPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.catalogPrivateEndpoints">catalog_private_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList">DataOciDatacatalogCatalogPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `catalog_private_endpoints`<sup>Required</sup> <a name="catalog_private_endpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.catalogPrivateEndpoints"></a>

```python
catalog_private_endpoints: DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filter"></a>

```python
filter: DataOciDatacatalogCatalogPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList">DataOciDatacatalogCatalogPrivateEndpointsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints()
```


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks()
```


### DataOciDatacatalogCatalogPrivateEndpointsConfig <a name="DataOciDatacatalogCatalogPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#filter DataOciDatacatalogCatalogPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}.

---

### DataOciDatacatalogCatalogPrivateEndpointsFilter <a name="DataOciDatacatalogCatalogPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#name DataOciDatacatalogCatalogPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#values DataOciDatacatalogCatalogPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#regex DataOciDatacatalogCatalogPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#name DataOciDatacatalogCatalogPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#values DataOciDatacatalogCatalogPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#regex DataOciDatacatalogCatalogPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks</a>

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.attachedCatalogs">attached_catalogs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_catalogs`<sup>Required</sup> <a name="attached_catalogs" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.attachedCatalogs"></a>

```python
attached_catalogs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.locks"></a>

```python
locks: DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints</a>

---


### DataOciDatacatalogCatalogPrivateEndpointsFilterList <a name="DataOciDatacatalogCatalogPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatacatalogCatalogPrivateEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]]

---


### DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datacatalog_catalog_private_endpoints

dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatacatalogCatalogPrivateEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter">DataOciDatacatalogCatalogPrivateEndpointsFilter</a>]

---



