# `dataOciLimitsResourceAvailability` Submodule <a name="`dataOciLimitsResourceAvailability` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLimitsResourceAvailability <a name="DataOciLimitsResourceAvailability" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability oci_limits_resource_availability}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability(
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
  limit_name: str,
  service_name: str,
  availability_domain: str = None,
  id: str = None,
  subscription_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.limitName">limit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}.

---

##### `limit_name`<sup>Required</sup> <a name="limit_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.limitName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLimitsResourceAvailability resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLimitsResourceAvailability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLimitsResourceAvailability to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLimitsResourceAvailability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLimitsResourceAvailability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.available">available</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.effectiveQuotaValue">effective_quota_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalAvailability">fractional_availability</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalUsage">fractional_usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.used">used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitNameInput">limit_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitName">limit_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available`<sup>Required</sup> <a name="available" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.available"></a>

```python
available: str
```

- *Type:* str

---

##### `effective_quota_value`<sup>Required</sup> <a name="effective_quota_value" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.effectiveQuotaValue"></a>

```python
effective_quota_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fractional_availability`<sup>Required</sup> <a name="fractional_availability" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalAvailability"></a>

```python
fractional_availability: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fractional_usage`<sup>Required</sup> <a name="fractional_usage" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalUsage"></a>

```python
fractional_usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used`<sup>Required</sup> <a name="used" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.used"></a>

```python
used: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_name_input`<sup>Optional</sup> <a name="limit_name_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitNameInput"></a>

```python
limit_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_name`<sup>Required</sup> <a name="limit_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitName"></a>

```python
limit_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLimitsResourceAvailabilityConfig <a name="DataOciLimitsResourceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_limits_resource_availability

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  limit_name: str,
  service_name: str,
  availability_domain: str = None,
  id: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.limitName">limit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}.

---

##### `limit_name`<sup>Required</sup> <a name="limit_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.limitName"></a>

```python
limit_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}.

---



