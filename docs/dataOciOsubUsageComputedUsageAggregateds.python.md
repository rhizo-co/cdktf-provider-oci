# `dataOciOsubUsageComputedUsageAggregateds` Submodule <a name="`dataOciOsubUsageComputedUsageAggregateds` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubUsageComputedUsageAggregateds <a name="DataOciOsubUsageComputedUsageAggregateds" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds oci_osub_usage_computed_usage_aggregateds}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds(
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
  subscription_id: str,
  time_from: str,
  time_to: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]] = None,
  grouping: str = None,
  id: str = None,
  parent_product: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#compartment_id DataOciOsubUsageComputedUsageAggregateds#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#subscription_id DataOciOsubUsageComputedUsageAggregateds#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_from DataOciOsubUsageComputedUsageAggregateds#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_to DataOciOsubUsageComputedUsageAggregateds#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.grouping">grouping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#grouping DataOciOsubUsageComputedUsageAggregateds#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#id DataOciOsubUsageComputedUsageAggregateds#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#parent_product DataOciOsubUsageComputedUsageAggregateds#parent_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#x_one_origin_region DataOciOsubUsageComputedUsageAggregateds#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#compartment_id DataOciOsubUsageComputedUsageAggregateds#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#subscription_id DataOciOsubUsageComputedUsageAggregateds#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.timeFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_from DataOciOsubUsageComputedUsageAggregateds#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.timeTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_to DataOciOsubUsageComputedUsageAggregateds#time_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#filter DataOciOsubUsageComputedUsageAggregateds#filter}

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.grouping"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#grouping DataOciOsubUsageComputedUsageAggregateds#grouping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#id DataOciOsubUsageComputedUsageAggregateds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.parentProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#parent_product DataOciOsubUsageComputedUsageAggregateds#parent_product}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#x_one_origin_region DataOciOsubUsageComputedUsageAggregateds#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetGrouping">reset_grouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetParentProduct">reset_parent_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_grouping` <a name="reset_grouping" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetGrouping"></a>

```python
def reset_grouping() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_product` <a name="reset_parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetParentProduct"></a>

```python
def reset_parent_product() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubUsageComputedUsageAggregateds resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubUsageComputedUsageAggregateds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubUsageComputedUsageAggregateds to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubUsageComputedUsageAggregateds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubUsageComputedUsageAggregateds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.computedUsageAggregateds">computed_usage_aggregateds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList">DataOciOsubUsageComputedUsageAggregatedsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.groupingInput">grouping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.parentProductInput">parent_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeFromInput">time_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeToInput">time_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.grouping">grouping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.parentProduct">parent_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeFrom">time_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeTo">time_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `computed_usage_aggregateds`<sup>Required</sup> <a name="computed_usage_aggregateds" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.computedUsageAggregateds"></a>

```python
computed_usage_aggregateds: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.filter"></a>

```python
filter: DataOciOsubUsageComputedUsageAggregatedsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList">DataOciOsubUsageComputedUsageAggregatedsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]

---

##### `grouping_input`<sup>Optional</sup> <a name="grouping_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.groupingInput"></a>

```python
grouping_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_product_input`<sup>Optional</sup> <a name="parent_product_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.parentProductInput"></a>

```python
parent_product_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `time_from_input`<sup>Optional</sup> <a name="time_from_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeFromInput"></a>

```python
time_from_input: str
```

- *Type:* str

---

##### `time_to_input`<sup>Optional</sup> <a name="time_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeToInput"></a>

```python
time_to_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.grouping"></a>

```python
grouping: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregateds.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds()
```


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages()
```


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct()
```


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct()
```


### DataOciOsubUsageComputedUsageAggregatedsConfig <a name="DataOciOsubUsageComputedUsageAggregatedsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  time_from: str,
  time_to: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]] = None,
  grouping: str = None,
  id: str = None,
  parent_product: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#compartment_id DataOciOsubUsageComputedUsageAggregateds#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#subscription_id DataOciOsubUsageComputedUsageAggregateds#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_from DataOciOsubUsageComputedUsageAggregateds#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_to DataOciOsubUsageComputedUsageAggregateds#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.grouping">grouping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#grouping DataOciOsubUsageComputedUsageAggregateds#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#id DataOciOsubUsageComputedUsageAggregateds#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#parent_product DataOciOsubUsageComputedUsageAggregateds#parent_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#x_one_origin_region DataOciOsubUsageComputedUsageAggregateds#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#compartment_id DataOciOsubUsageComputedUsageAggregateds#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#subscription_id DataOciOsubUsageComputedUsageAggregateds#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_from DataOciOsubUsageComputedUsageAggregateds#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#time_to DataOciOsubUsageComputedUsageAggregateds#time_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#filter DataOciOsubUsageComputedUsageAggregateds#filter}

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.grouping"></a>

```python
grouping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#grouping DataOciOsubUsageComputedUsageAggregateds#grouping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#id DataOciOsubUsageComputedUsageAggregateds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#parent_product DataOciOsubUsageComputedUsageAggregateds#parent_product}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#x_one_origin_region DataOciOsubUsageComputedUsageAggregateds#x_one_origin_region}.

---

### DataOciOsubUsageComputedUsageAggregatedsFilter <a name="DataOciOsubUsageComputedUsageAggregatedsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#name DataOciOsubUsageComputedUsageAggregateds#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#values DataOciOsubUsageComputedUsageAggregateds#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#regex DataOciOsubUsageComputedUsageAggregateds#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#name DataOciOsubUsageComputedUsageAggregateds#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#values DataOciOsubUsageComputedUsageAggregateds#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage_aggregateds#regex DataOciOsubUsageComputedUsageAggregateds#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.cost">cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.costUnrounded">cost_unrounded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.timeMeteredOn">time_metered_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.cost"></a>

```python
cost: str
```

- *Type:* str

---

##### `cost_unrounded`<sup>Required</sup> <a name="cost_unrounded" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.costUnrounded"></a>

```python
cost_unrounded: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.product"></a>

```python
product: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_metered_on`<sup>Required</sup> <a name="time_metered_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.timeMeteredOn"></a>

```python
time_metered_on: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsages</a>

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesProduct</a>

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.aggregatedComputedUsages">aggregated_computed_usages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.parentProduct">parent_product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.parentSubscribedServiceId">parent_subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.planNumber">plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.pricingModel">pricing_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.rateCardId">rate_card_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregated_computed_usages`<sup>Required</sup> <a name="aggregated_computed_usages" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.aggregatedComputedUsages"></a>

```python
aggregated_computed_usages: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsAggregatedComputedUsagesList</a>

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.parentProduct"></a>

```python
parent_product: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList</a>

---

##### `parent_subscribed_service_id`<sup>Required</sup> <a name="parent_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.parentSubscribedServiceId"></a>

```python
parent_subscribed_service_id: str
```

- *Type:* str

---

##### `plan_number`<sup>Required</sup> <a name="plan_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.planNumber"></a>

```python
plan_number: str
```

- *Type:* str

---

##### `pricing_model`<sup>Required</sup> <a name="pricing_model" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.pricingModel"></a>

```python
pricing_model: str
```

- *Type:* str

---

##### `rate_card_id`<sup>Required</sup> <a name="rate_card_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.rateCardId"></a>

```python
rate_card_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregateds</a>

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference <a name="DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct">DataOciOsubUsageComputedUsageAggregatedsComputedUsageAggregatedsParentProduct</a>

---


### DataOciOsubUsageComputedUsageAggregatedsFilterList <a name="DataOciOsubUsageComputedUsageAggregatedsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsageAggregatedsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]]

---


### DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference <a name="DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usage_aggregateds

dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubUsageComputedUsageAggregatedsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsageAggregateds.DataOciOsubUsageComputedUsageAggregatedsFilter">DataOciOsubUsageComputedUsageAggregatedsFilter</a>]

---



