# `dataOciOsubSubscriptionRatecards` Submodule <a name="`dataOciOsubSubscriptionRatecards` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionRatecards <a name="DataOciOsubSubscriptionRatecards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards oci_osub_subscription_ratecards}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]] = None,
  id: str = None,
  part_number: str = None,
  time_from: str = None,
  time_to: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.partNumber">part_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#filter DataOciOsubSubscriptionRatecards#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `part_number`<sup>Optional</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.partNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}.

---

##### `time_from`<sup>Optional</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.timeFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}.

---

##### `time_to`<sup>Optional</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.timeTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber">reset_part_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom">reset_time_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo">reset_time_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_part_number` <a name="reset_part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber"></a>

```python
def reset_part_number() -> None
```

##### `reset_time_from` <a name="reset_time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom"></a>

```python
def reset_time_from() -> None
```

##### `reset_time_to` <a name="reset_time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo"></a>

```python
def reset_time_to() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubSubscriptionRatecards to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubSubscriptionRatecards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionRatecards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards">rate_cards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput">part_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput">time_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput">time_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom">time_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo">time_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter"></a>

```python
filter: DataOciOsubSubscriptionRatecardsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a>

---

##### `rate_cards`<sup>Required</sup> <a name="rate_cards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards"></a>

```python
rate_cards: DataOciOsubSubscriptionRatecardsRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `part_number_input`<sup>Optional</sup> <a name="part_number_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput"></a>

```python
part_number_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `time_from_input`<sup>Optional</sup> <a name="time_from_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput"></a>

```python
time_from_input: str
```

- *Type:* str

---

##### `time_to_input`<sup>Optional</sup> <a name="time_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput"></a>

```python
time_to_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionRatecardsConfig <a name="DataOciOsubSubscriptionRatecardsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]] = None,
  id: str = None,
  part_number: str = None,
  time_from: str = None,
  time_to: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber">part_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#filter DataOciOsubSubscriptionRatecards#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `part_number`<sup>Optional</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}.

---

##### `time_from`<sup>Optional</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}.

---

##### `time_to`<sup>Optional</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}.

---

### DataOciOsubSubscriptionRatecardsFilter <a name="DataOciOsubSubscriptionRatecardsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}.

---

### DataOciOsubSubscriptionRatecardsRateCards <a name="DataOciOsubSubscriptionRatecardsRateCards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards()
```


### DataOciOsubSubscriptionRatecardsRateCardsCurrency <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency()
```


### DataOciOsubSubscriptionRatecardsRateCardsProduct <a name="DataOciOsubSubscriptionRatecardsRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct()
```


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionRatecardsFilterList <a name="DataOciOsubSubscriptionRatecardsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionRatecardsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionRatecardsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]]

---


### DataOciOsubSubscriptionRatecardsFilterOutputReference <a name="DataOciOsubSubscriptionRatecardsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubSubscriptionRatecardsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter">DataOciOsubSubscriptionRatecardsFilter</a>]

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyList <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubSubscriptionRatecardsRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsList <a name="DataOciOsubSubscriptionRatecardsRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionRatecardsRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubSubscriptionRatecardsRateCardsOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage">discretionary_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier">is_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers">rate_card_tiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency"></a>

```python
currency: DataOciOsubSubscriptionRatecardsRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a>

---

##### `discretionary_discount_percentage`<sup>Required</sup> <a name="discretionary_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```python
discretionary_discount_percentage: str
```

- *Type:* str

---

##### `is_tier`<sup>Required</sup> <a name="is_tier" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier"></a>

```python
is_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product"></a>

```python
product: DataOciOsubSubscriptionRatecardsRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a>

---

##### `rate_card_tiers`<sup>Required</sup> <a name="rate_card_tiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers"></a>

```python
rate_card_tiers: DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a>

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubSubscriptionRatecardsRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsProductList <a name="DataOciOsubSubscriptionRatecardsRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubSubscriptionRatecardsRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_ratecards

dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity">up_to_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `up_to_quantity`<sup>Required</sup> <a name="up_to_quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```python
up_to_quantity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a>

---



