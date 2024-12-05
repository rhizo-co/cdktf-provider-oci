# `dataOciCapacityManagementInternalOccAvailabilityCatalogs` Submodule <a name="`dataOciCapacityManagementInternalOccAvailabilityCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogs <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogs" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs oci_capacity_management_internal_occ_availability_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs(
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
  occ_customer_group_id: str,
  catalog_state: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.catalogState">catalog_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}.

---

##### `catalog_state`<sup>Optional</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.catalogState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#filter DataOciCapacityManagementInternalOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetCatalogState">reset_catalog_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]

---

##### `reset_catalog_state` <a name="reset_catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetCatalogState"></a>

```python
def reset_catalog_state() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementInternalOccAvailabilityCatalogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementInternalOccAvailabilityCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalOccAvailabilityCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection">occ_availability_catalog_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogStateInput">catalog_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupIdInput">occ_customer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filter"></a>

```python
filter: DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList</a>

---

##### `occ_availability_catalog_collection`<sup>Required</sup> <a name="occ_availability_catalog_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection"></a>

```python
occ_availability_catalog_collection: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a>

---

##### `catalog_state_input`<sup>Optional</sup> <a name="catalog_state_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogStateInput"></a>

```python
catalog_state_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_customer_group_id_input`<sup>Optional</sup> <a name="occ_customer_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupIdInput"></a>

```python
occ_customer_group_id_input: str
```

- *Type:* str

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  occ_customer_group_id: str,
  catalog_state: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.catalogState">catalog_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}.

---

##### `catalog_state`<sup>Optional</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#filter DataOciCapacityManagementInternalOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}.

---

### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#name DataOciCapacityManagementInternalOccAvailabilityCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#values DataOciCapacityManagementInternalOccAvailabilityCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#regex DataOciCapacityManagementInternalOccAvailabilityCatalogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#name DataOciCapacityManagementInternalOccAvailabilityCatalogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#values DataOciCapacityManagementInternalOccAvailabilityCatalogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#regex DataOciCapacityManagementInternalOccAvailabilityCatalogs#regex}.

---

### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection()
```


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems()
```


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]]

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>]

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion">format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_version`<sup>Required</sup> <a name="format_version" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion"></a>

```python
format_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState">catalog_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails">metadata_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_state`<sup>Required</sup> <a name="catalog_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState"></a>

```python
catalog_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata_details`<sup>Required</sup> <a name="metadata_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails"></a>

```python
metadata_details: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_availability_catalogs

dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a>

---



