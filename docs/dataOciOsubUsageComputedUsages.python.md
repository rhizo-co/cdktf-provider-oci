# `dataOciOsubUsageComputedUsages` Submodule <a name="`dataOciOsubUsageComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubUsageComputedUsages <a name="DataOciOsubUsageComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages oci_osub_usage_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages(
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
  computed_product: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]] = None,
  id: str = None,
  parent_product: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#compartment_id DataOciOsubUsageComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#subscription_id DataOciOsubUsageComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_from DataOciOsubUsageComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_to DataOciOsubUsageComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.computedProduct">computed_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#computed_product DataOciOsubUsageComputedUsages#computed_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#id DataOciOsubUsageComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#parent_product DataOciOsubUsageComputedUsages#parent_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#x_one_origin_region DataOciOsubUsageComputedUsages#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#compartment_id DataOciOsubUsageComputedUsages#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#subscription_id DataOciOsubUsageComputedUsages#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.timeFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_from DataOciOsubUsageComputedUsages#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.timeTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_to DataOciOsubUsageComputedUsages#time_to}.

---

##### `computed_product`<sup>Optional</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.computedProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#computed_product DataOciOsubUsageComputedUsages#computed_product}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#filter DataOciOsubUsageComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#id DataOciOsubUsageComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.parentProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#parent_product DataOciOsubUsageComputedUsages#parent_product}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#x_one_origin_region DataOciOsubUsageComputedUsages#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetComputedProduct">reset_computed_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetParentProduct">reset_parent_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]

---

##### `reset_computed_product` <a name="reset_computed_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetComputedProduct"></a>

```python
def reset_computed_product() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_product` <a name="reset_parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetParentProduct"></a>

```python
def reset_parent_product() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubUsageComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubUsageComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubUsageComputedUsages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubUsageComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubUsageComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedUsages">computed_usages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList">DataOciOsubUsageComputedUsagesComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList">DataOciOsubUsageComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedProductInput">computed_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.parentProductInput">parent_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeFromInput">time_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeToInput">time_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedProduct">computed_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.parentProduct">parent_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeFrom">time_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeTo">time_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `computed_usages`<sup>Required</sup> <a name="computed_usages" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedUsages"></a>

```python
computed_usages: DataOciOsubUsageComputedUsagesComputedUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList">DataOciOsubUsageComputedUsagesComputedUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.filter"></a>

```python
filter: DataOciOsubUsageComputedUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList">DataOciOsubUsageComputedUsagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `computed_product_input`<sup>Optional</sup> <a name="computed_product_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedProductInput"></a>

```python
computed_product_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_product_input`<sup>Optional</sup> <a name="parent_product_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.parentProductInput"></a>

```python
parent_product_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `time_from_input`<sup>Optional</sup> <a name="time_from_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeFromInput"></a>

```python
time_from_input: str
```

- *Type:* str

---

##### `time_to_input`<sup>Optional</sup> <a name="time_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeToInput"></a>

```python
time_to_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `computed_product`<sup>Required</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.computedProduct"></a>

```python
computed_product: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubUsageComputedUsagesComputedUsages <a name="DataOciOsubUsageComputedUsagesComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsages()
```


### DataOciOsubUsageComputedUsagesComputedUsagesParentProduct <a name="DataOciOsubUsageComputedUsagesComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProduct()
```


### DataOciOsubUsageComputedUsagesComputedUsagesProduct <a name="DataOciOsubUsageComputedUsagesComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProduct()
```


### DataOciOsubUsageComputedUsagesConfig <a name="DataOciOsubUsageComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig(
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
  computed_product: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]] = None,
  id: str = None,
  parent_product: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#compartment_id DataOciOsubUsageComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#subscription_id DataOciOsubUsageComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_from DataOciOsubUsageComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_to DataOciOsubUsageComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.computedProduct">computed_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#computed_product DataOciOsubUsageComputedUsages#computed_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#id DataOciOsubUsageComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#parent_product DataOciOsubUsageComputedUsages#parent_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#x_one_origin_region DataOciOsubUsageComputedUsages#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#compartment_id DataOciOsubUsageComputedUsages#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#subscription_id DataOciOsubUsageComputedUsages#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_from DataOciOsubUsageComputedUsages#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#time_to DataOciOsubUsageComputedUsages#time_to}.

---

##### `computed_product`<sup>Optional</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.computedProduct"></a>

```python
computed_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#computed_product DataOciOsubUsageComputedUsages#computed_product}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#filter DataOciOsubUsageComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#id DataOciOsubUsageComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#parent_product DataOciOsubUsageComputedUsages#parent_product}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#x_one_origin_region DataOciOsubUsageComputedUsages#x_one_origin_region}.

---

### DataOciOsubUsageComputedUsagesFilter <a name="DataOciOsubUsageComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#name DataOciOsubUsageComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#values DataOciOsubUsageComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#regex DataOciOsubUsageComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#name DataOciOsubUsageComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#values DataOciOsubUsageComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usages#regex DataOciOsubUsageComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubUsageComputedUsagesComputedUsagesList <a name="DataOciOsubUsageComputedUsagesComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsagesComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsagesComputedUsagesOutputReference <a name="DataOciOsubUsageComputedUsagesComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId">commitment_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.computedUsageId">computed_usage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.computeSource">compute_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.cost">cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.costRounded">cost_rounded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.isInvoiced">is_invoiced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.mqsMessageId">mqs_message_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber">original_usage_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.parentProduct">parent_product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList">DataOciOsubUsageComputedUsagesComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId">parent_subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.planNumber">plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList">DataOciOsubUsageComputedUsagesComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.rateCardId">rate_card_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId">rate_card_tierd_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn">time_metered_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeOfArrival">time_of_arrival</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.usageNumber">usage_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsages">DataOciOsubUsageComputedUsagesComputedUsages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_service_id`<sup>Required</sup> <a name="commitment_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId"></a>

```python
commitment_service_id: str
```

- *Type:* str

---

##### `computed_usage_id`<sup>Required</sup> <a name="computed_usage_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.computedUsageId"></a>

```python
computed_usage_id: str
```

- *Type:* str

---

##### `compute_source`<sup>Required</sup> <a name="compute_source" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.computeSource"></a>

```python
compute_source: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.cost"></a>

```python
cost: str
```

- *Type:* str

---

##### `cost_rounded`<sup>Required</sup> <a name="cost_rounded" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.costRounded"></a>

```python
cost_rounded: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_invoiced`<sup>Required</sup> <a name="is_invoiced" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.isInvoiced"></a>

```python
is_invoiced: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mqs_message_id`<sup>Required</sup> <a name="mqs_message_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.mqsMessageId"></a>

```python
mqs_message_id: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `original_usage_number`<sup>Required</sup> <a name="original_usage_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber"></a>

```python
original_usage_number: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.parentProduct"></a>

```python
parent_product: DataOciOsubUsageComputedUsagesComputedUsagesParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList">DataOciOsubUsageComputedUsagesComputedUsagesParentProductList</a>

---

##### `parent_subscribed_service_id`<sup>Required</sup> <a name="parent_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```python
parent_subscribed_service_id: str
```

- *Type:* str

---

##### `plan_number`<sup>Required</sup> <a name="plan_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.planNumber"></a>

```python
plan_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.product"></a>

```python
product: DataOciOsubUsageComputedUsagesComputedUsagesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList">DataOciOsubUsageComputedUsagesComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `rate_card_id`<sup>Required</sup> <a name="rate_card_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.rateCardId"></a>

```python
rate_card_id: str
```

- *Type:* str

---

##### `rate_card_tierd_id`<sup>Required</sup> <a name="rate_card_tierd_id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId"></a>

```python
rate_card_tierd_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_metered_on`<sup>Required</sup> <a name="time_metered_on" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn"></a>

```python
time_metered_on: str
```

- *Type:* str

---

##### `time_of_arrival`<sup>Required</sup> <a name="time_of_arrival" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeOfArrival"></a>

```python
time_of_arrival: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `usage_number`<sup>Required</sup> <a name="usage_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.usageNumber"></a>

```python
usage_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsagesComputedUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsages">DataOciOsubUsageComputedUsagesComputedUsages</a>

---


### DataOciOsubUsageComputedUsagesComputedUsagesParentProductList <a name="DataOciOsubUsageComputedUsagesComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference <a name="DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProduct">DataOciOsubUsageComputedUsagesComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsagesComputedUsagesParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesParentProduct">DataOciOsubUsageComputedUsagesComputedUsagesParentProduct</a>

---


### DataOciOsubUsageComputedUsagesComputedUsagesProductList <a name="DataOciOsubUsageComputedUsagesComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference <a name="DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProduct">DataOciOsubUsageComputedUsagesComputedUsagesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubUsageComputedUsagesComputedUsagesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesComputedUsagesProduct">DataOciOsubUsageComputedUsagesComputedUsagesProduct</a>

---


### DataOciOsubUsageComputedUsagesFilterList <a name="DataOciOsubUsageComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubUsageComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubUsageComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]]

---


### DataOciOsubUsageComputedUsagesFilterOutputReference <a name="DataOciOsubUsageComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_usage_computed_usages

dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubUsageComputedUsagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsages.DataOciOsubUsageComputedUsagesFilter">DataOciOsubUsageComputedUsagesFilter</a>]

---



