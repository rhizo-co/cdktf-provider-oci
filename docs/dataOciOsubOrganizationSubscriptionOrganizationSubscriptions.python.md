# `dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions oci_osub_organization_subscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions(
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
  subscription_ids: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]] = None,
  id: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.subscriptionIds">subscription_ids</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.subscriptionIds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#filter DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubOrganizationSubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions">subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput">subscription_ids_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds">subscription_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter"></a>

```python
filter: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions"></a>

```python
subscriptions: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_ids_input`<sup>Optional</sup> <a name="subscription_ids_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput"></a>

```python
subscription_ids_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds"></a>

```python
subscription_ids: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_ids: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]] = None,
  id: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds">subscription_ids</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds"></a>

```python
subscription_ids: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#filter DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions()
```


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]]

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>]

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_organization_subscription_organization_subscriptions

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue">total_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```python
currency: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `total_value`<sup>Required</sup> <a name="total_value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue"></a>

```python
total_value: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a>

---



