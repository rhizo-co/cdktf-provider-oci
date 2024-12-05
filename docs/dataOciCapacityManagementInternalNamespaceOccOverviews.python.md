# `dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviews <a name="DataOciCapacityManagementInternalNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews oci_capacity_management_internal_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews(
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
  namespace: str,
  occ_customer_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]] = None,
  from: str = None,
  id: str = None,
  to: str = None,
  workload_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#filter DataOciCapacityManagementInternalNamespaceOccOverviews#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.to"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}.

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.workloadType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo">reset_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType">reset_workload_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_from` <a name="reset_from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_to` <a name="reset_to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo"></a>

```python
def reset_to() -> None
```

##### `reset_workload_type` <a name="reset_workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType"></a>

```python
def reset_workload_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementInternalNamespaceOccOverviews to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementInternalNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection">occ_overview_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput">occ_customer_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter"></a>

```python
filter: DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a>

---

##### `occ_overview_collection`<sup>Required</sup> <a name="occ_overview_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection"></a>

```python
occ_overview_collection: DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_customer_group_id_input`<sup>Optional</sup> <a name="occ_customer_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput"></a>

```python
occ_customer_group_id_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  occ_customer_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]] = None,
  from: str = None,
  id: str = None,
  to: str = None,
  workload_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}.

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#filter DataOciCapacityManagementInternalNamespaceOccOverviews#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}.

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection()
```


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]]

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementInternalNamespaceOccOverviewsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>]

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">capacity_requests_blob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">period_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">total_available</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">total_cancelled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">total_demanded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">total_rejected</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">total_supplied</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">total_unfulfilled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">workload_type_breakdown_blob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_requests_blob`<sup>Required</sup> <a name="capacity_requests_blob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```python
capacity_requests_blob: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `period_value`<sup>Required</sup> <a name="period_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```python
period_value: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `total_available`<sup>Required</sup> <a name="total_available" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```python
total_available: str
```

- *Type:* str

---

##### `total_cancelled`<sup>Required</sup> <a name="total_cancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```python
total_cancelled: str
```

- *Type:* str

---

##### `total_demanded`<sup>Required</sup> <a name="total_demanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```python
total_demanded: str
```

- *Type:* str

---

##### `total_rejected`<sup>Required</sup> <a name="total_rejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```python
total_rejected: str
```

- *Type:* str

---

##### `total_supplied`<sup>Required</sup> <a name="total_supplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```python
total_supplied: str
```

- *Type:* str

---

##### `total_unfulfilled`<sup>Required</sup> <a name="total_unfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```python
total_unfulfilled: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `workload_type_breakdown_blob`<sup>Required</sup> <a name="workload_type_breakdown_blob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```python
workload_type_breakdown_blob: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_namespace_occ_overviews

dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a>

---



