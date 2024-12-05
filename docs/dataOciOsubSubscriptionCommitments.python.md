# `dataOciOsubSubscriptionCommitments` Submodule <a name="`dataOciOsubSubscriptionCommitments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionCommitments <a name="DataOciOsubSubscriptionCommitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments oci_osub_subscription_commitments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments(
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
  subscribed_service_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]] = None,
  id: str = None,
  x_one_gateway_subscription_id: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}.

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.subscribedServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#filter DataOciOsubSubscriptionCommitments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_gateway_subscription_id`<sup>Optional</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.xOneGatewaySubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneGatewaySubscriptionId">reset_x_one_gateway_subscription_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_x_one_gateway_subscription_id` <a name="reset_x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneGatewaySubscriptionId"></a>

```python
def reset_x_one_gateway_subscription_id() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionCommitments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubSubscriptionCommitments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubSubscriptionCommitments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubSubscriptionCommitments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionCommitments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.commitments">commitments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList">DataOciOsubSubscriptionCommitmentsCommitmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList">DataOciOsubSubscriptionCommitmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceIdInput">subscribed_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionIdInput">x_one_gateway_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `commitments`<sup>Required</sup> <a name="commitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.commitments"></a>

```python
commitments: DataOciOsubSubscriptionCommitmentsCommitmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList">DataOciOsubSubscriptionCommitmentsCommitmentsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filter"></a>

```python
filter: DataOciOsubSubscriptionCommitmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList">DataOciOsubSubscriptionCommitmentsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscribed_service_id_input`<sup>Optional</sup> <a name="subscribed_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceIdInput"></a>

```python
subscribed_service_id_input: str
```

- *Type:* str

---

##### `x_one_gateway_subscription_id_input`<sup>Optional</sup> <a name="x_one_gateway_subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionIdInput"></a>

```python
x_one_gateway_subscription_id_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `x_one_gateway_subscription_id`<sup>Required</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionId"></a>

```python
x_one_gateway_subscription_id: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionCommitmentsCommitments <a name="DataOciOsubSubscriptionCommitmentsCommitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments()
```


### DataOciOsubSubscriptionCommitmentsConfig <a name="DataOciOsubSubscriptionCommitmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscribed_service_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]] = None,
  id: str = None,
  x_one_gateway_subscription_id: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}.

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#filter DataOciOsubSubscriptionCommitments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_gateway_subscription_id`<sup>Optional</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneGatewaySubscriptionId"></a>

```python
x_one_gateway_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}.

---

### DataOciOsubSubscriptionCommitmentsFilter <a name="DataOciOsubSubscriptionCommitmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#name DataOciOsubSubscriptionCommitments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#values DataOciOsubSubscriptionCommitments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#regex DataOciOsubSubscriptionCommitments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#name DataOciOsubSubscriptionCommitments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#values DataOciOsubSubscriptionCommitments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#regex DataOciOsubSubscriptionCommitments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionCommitmentsCommitmentsList <a name="DataOciOsubSubscriptionCommitmentsCommitmentsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference <a name="DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.usedAmount">used_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments">DataOciOsubSubscriptionCommitmentsCommitments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `used_amount`<sup>Required</sup> <a name="used_amount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.usedAmount"></a>

```python
used_amount: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubSubscriptionCommitmentsCommitments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments">DataOciOsubSubscriptionCommitmentsCommitments</a>

---


### DataOciOsubSubscriptionCommitmentsFilterList <a name="DataOciOsubSubscriptionCommitmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubSubscriptionCommitmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubSubscriptionCommitmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]]

---


### DataOciOsubSubscriptionCommitmentsFilterOutputReference <a name="DataOciOsubSubscriptionCommitmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitments

dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubSubscriptionCommitmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter">DataOciOsubSubscriptionCommitmentsFilter</a>]

---



