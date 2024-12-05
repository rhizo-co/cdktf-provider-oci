# `dataOciCapacityManagementOccAvailabilityCatalogs` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogs <a name="DataOciCapacityManagementOccAvailabilityCatalogs" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs oci_capacity_management_occ_availability_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs(
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
  catalog_state: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.catalogState">catalog_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}.

---

##### `catalog_state`<sup>Optional</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.catalogState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#filter DataOciCapacityManagementOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState">reset_catalog_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]

---

##### `reset_catalog_state` <a name="reset_catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState"></a>

```python
def reset_catalog_state() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccAvailabilityCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection">occ_availability_catalog_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput">catalog_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter"></a>

```python
filter: DataOciCapacityManagementOccAvailabilityCatalogsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a>

---

##### `occ_availability_catalog_collection`<sup>Required</sup> <a name="occ_availability_catalog_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection"></a>

```python
occ_availability_catalog_collection: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a>

---

##### `catalog_state_input`<sup>Optional</sup> <a name="catalog_state_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput"></a>

```python
catalog_state_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  catalog_state: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState">catalog_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}.

---

##### `catalog_state`<sup>Optional</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#filter DataOciCapacityManagementOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsFilter <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection()
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems()
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails()
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsFilterList <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]]

---


### DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementOccAvailabilityCatalogsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>]

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity">available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder">date_final_customer_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity">demanded_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity">total_available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_quantity`<sup>Required</sup> <a name="available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity"></a>

```python
available_quantity: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `date_final_customer_order`<sup>Required</sup> <a name="date_final_customer_order" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```python
date_final_customer_order: str
```

- *Type:* str

---

##### `demanded_quantity`<sup>Required</sup> <a name="demanded_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity"></a>

```python
demanded_quantity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `total_available_quantity`<sup>Required</sup> <a name="total_available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity"></a>

```python
total_available_quantity: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion">format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails">base64_encoded_catalog_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base64_encoded_catalog_details`<sup>Required</sup> <a name="base64_encoded_catalog_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails"></a>

```python
base64_encoded_catalog_details: str
```

- *Type:* str

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details"></a>

```python
details: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata_details`<sup>Required</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails"></a>

```python
metadata_details: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalogs

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a>

---



