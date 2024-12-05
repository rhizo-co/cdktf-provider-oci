# `dataOciUsageProxyUsagelimits` Submodule <a name="`dataOciUsageProxyUsagelimits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyUsagelimits <a name="DataOciUsageProxyUsagelimits" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits oci_usage_proxy_usagelimits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits(
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
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]] = None,
  id: str = None,
  limit_type: str = None,
  resource_type: str = None,
  service_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.limitType">limit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#filter DataOciUsageProxyUsagelimits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_type`<sup>Optional</sup> <a name="limit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.limitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetLimitType">reset_limit_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetServiceType">reset_service_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_type` <a name="reset_limit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetLimitType"></a>

```python
def reset_limit_type() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetServiceType"></a>

```python
def reset_service_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxyUsagelimits resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxyUsagelimits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxyUsagelimits to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxyUsagelimits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyUsagelimits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList">DataOciUsageProxyUsagelimitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.usageLimitCollection">usage_limit_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList">DataOciUsageProxyUsagelimitsUsageLimitCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitTypeInput">limit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filter"></a>

```python
filter: DataOciUsageProxyUsagelimitsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList">DataOciUsageProxyUsagelimitsFilterList</a>

---

##### `usage_limit_collection`<sup>Required</sup> <a name="usage_limit_collection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.usageLimitCollection"></a>

```python
usage_limit_collection: DataOciUsageProxyUsagelimitsUsageLimitCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList">DataOciUsageProxyUsagelimitsUsageLimitCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_type_input`<sup>Optional</sup> <a name="limit_type_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitTypeInput"></a>

```python
limit_type_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyUsagelimitsConfig <a name="DataOciUsageProxyUsagelimitsConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]] = None,
  id: str = None,
  limit_type: str = None,
  resource_type: str = None,
  service_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.limitType">limit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#filter DataOciUsageProxyUsagelimits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_type`<sup>Optional</sup> <a name="limit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}.

---

### DataOciUsageProxyUsagelimitsFilter <a name="DataOciUsageProxyUsagelimitsFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#name DataOciUsageProxyUsagelimits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#values DataOciUsageProxyUsagelimits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#regex DataOciUsageProxyUsagelimits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#name DataOciUsageProxyUsagelimits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#values DataOciUsageProxyUsagelimits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#regex DataOciUsageProxyUsagelimits#regex}.

---

### DataOciUsageProxyUsagelimitsUsageLimitCollection <a name="DataOciUsageProxyUsagelimitsUsageLimitCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection()
```


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItems <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyUsagelimitsFilterList <a name="DataOciUsageProxyUsagelimitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyUsagelimitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciUsageProxyUsagelimitsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]]

---


### DataOciUsageProxyUsagelimitsFilterOutputReference <a name="DataOciUsageProxyUsagelimitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciUsageProxyUsagelimitsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>]

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.alertLevel">alert_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.maxHardLimit">max_hard_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.skuPartId">sku_part_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems">DataOciUsageProxyUsagelimitsUsageLimitCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `alert_level`<sup>Required</sup> <a name="alert_level" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.alertLevel"></a>

```python
alert_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `max_hard_limit`<sup>Required</sup> <a name="max_hard_limit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.maxHardLimit"></a>

```python
max_hard_limit: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `sku_part_id`<sup>Required</sup> <a name="sku_part_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.skuPartId"></a>

```python
sku_part_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyUsagelimitsUsageLimitCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems">DataOciUsageProxyUsagelimitsUsageLimitCollectionItems</a>

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionList <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_usagelimits

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList">DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection">DataOciUsageProxyUsagelimitsUsageLimitCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.items"></a>

```python
items: DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList">DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyUsagelimitsUsageLimitCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection">DataOciUsageProxyUsagelimitsUsageLimitCollection</a>

---



