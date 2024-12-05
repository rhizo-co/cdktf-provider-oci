# `dataOciOsubBillingScheduleBillingSchedules` Submodule <a name="`dataOciOsubBillingScheduleBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubBillingScheduleBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules oci_osub_billing_schedule_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]] = None,
  id: str = None,
  subscribed_service_id: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribed_service_id`<sup>Optional</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscribedServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId">reset_subscribed_service_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subscribed_service_id` <a name="reset_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId"></a>

```python
def reset_subscribed_service_id() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubBillingScheduleBillingSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubBillingScheduleBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubBillingScheduleBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules">billing_schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput">subscribed_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `billing_schedules`<sup>Required</sup> <a name="billing_schedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules"></a>

```python
billing_schedules: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter"></a>

```python
filter: DataOciOsubBillingScheduleBillingSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscribed_service_id_input`<sup>Optional</sup> <a name="subscribed_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput"></a>

```python
subscribed_service_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules()
```


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct()
```


### DataOciOsubBillingScheduleBillingSchedulesConfig <a name="DataOciOsubBillingScheduleBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]] = None,
  id: str = None,
  subscribed_service_id: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribed_service_id`<sup>Optional</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

### DataOciOsubBillingScheduleBillingSchedulesFilter <a name="DataOciOsubBillingScheduleBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">ar_customer_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">ar_invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billing_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoice_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">order_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">time_invoicing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `ar_customer_transaction_id`<sup>Required</sup> <a name="ar_customer_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```python
ar_customer_transaction_id: str
```

- *Type:* str

---

##### `ar_invoice_number`<sup>Required</sup> <a name="ar_invoice_number" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```python
ar_invoice_number: str
```

- *Type:* str

---

##### `billing_frequency`<sup>Required</sup> <a name="billing_frequency" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```python
billing_frequency: str
```

- *Type:* str

---

##### `invoice_status`<sup>Required</sup> <a name="invoice_status" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```python
invoice_status: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `order_number`<sup>Required</sup> <a name="order_number" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```python
order_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```python
product: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_invoicing`<sup>Required</sup> <a name="time_invoicing" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```python
time_invoicing: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubBillingScheduleBillingSchedulesBillingSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a>

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOsubBillingScheduleBillingSchedulesFilterList <a name="DataOciOsubBillingScheduleBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubBillingScheduleBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]]

---


### DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_billing_schedule_billing_schedules

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubBillingScheduleBillingSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>]

---



