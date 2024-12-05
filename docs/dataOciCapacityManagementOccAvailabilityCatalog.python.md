# `dataOciCapacityManagementOccAvailabilityCatalog` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalog` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalog <a name="DataOciCapacityManagementOccAvailabilityCatalog" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_availability_catalog_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.occAvailabilityCatalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccAvailabilityCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails">base64_encoded_catalog_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList">DataOciCapacityManagementOccAvailabilityCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogIdInput">occ_availability_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `base64_encoded_catalog_details`<sup>Required</sup> <a name="base64_encoded_catalog_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails"></a>

```python
base64_encoded_catalog_details: str
```

- *Type:* str

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.details"></a>

```python
details: DataOciCapacityManagementOccAvailabilityCatalogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList">DataOciCapacityManagementOccAvailabilityCatalogDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata_details`<sup>Required</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.metadataDetails"></a>

```python
metadata_details: DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `occ_availability_catalog_id_input`<sup>Optional</sup> <a name="occ_availability_catalog_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogIdInput"></a>

```python
occ_availability_catalog_id_input: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_availability_catalog_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}.

---

### DataOciCapacityManagementOccAvailabilityCatalogDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails()
```


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity">available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder">date_final_customer_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity">demanded_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity">total_available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails">DataOciCapacityManagementOccAvailabilityCatalogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_quantity`<sup>Required</sup> <a name="available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity"></a>

```python
available_quantity: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `date_final_customer_order`<sup>Required</sup> <a name="date_final_customer_order" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```python
date_final_customer_order: str
```

- *Type:* str

---

##### `demanded_quantity`<sup>Required</sup> <a name="demanded_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity"></a>

```python
demanded_quantity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `total_available_quantity`<sup>Required</sup> <a name="total_available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity"></a>

```python
total_available_quantity: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails">DataOciCapacityManagementOccAvailabilityCatalogDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog

dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion">format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---



