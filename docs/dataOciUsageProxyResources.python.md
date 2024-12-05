# `dataOciUsageProxyResources` Submodule <a name="`dataOciUsageProxyResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyResources <a name="DataOciUsageProxyResources" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources oci_usage_proxy_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResources(
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
  service_name: str,
  entitlement_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.entitlementId">entitlement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}.

---

##### `entitlement_id`<sup>Optional</sup> <a name="entitlement_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.entitlementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#filter DataOciUsageProxyResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetEntitlementId">reset_entitlement_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]

---

##### `reset_entitlement_id` <a name="reset_entitlement_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetEntitlementId"></a>

```python
def reset_entitlement_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxyResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxyResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxyResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxyResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList">DataOciUsageProxyResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.resourcesCollection">resources_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList">DataOciUsageProxyResourcesResourcesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementIdInput">entitlement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filter"></a>

```python
filter: DataOciUsageProxyResourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList">DataOciUsageProxyResourcesFilterList</a>

---

##### `resources_collection`<sup>Required</sup> <a name="resources_collection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.resourcesCollection"></a>

```python
resources_collection: DataOciUsageProxyResourcesResourcesCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList">DataOciUsageProxyResourcesResourcesCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `entitlement_id_input`<sup>Optional</sup> <a name="entitlement_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementIdInput"></a>

```python
entitlement_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyResourcesConfig <a name="DataOciUsageProxyResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_name: str,
  entitlement_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.entitlementId">entitlement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}.

---

##### `entitlement_id`<sup>Optional</sup> <a name="entitlement_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#filter DataOciUsageProxyResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciUsageProxyResourcesFilter <a name="DataOciUsageProxyResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#name DataOciUsageProxyResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#values DataOciUsageProxyResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#regex DataOciUsageProxyResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#name DataOciUsageProxyResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#values DataOciUsageProxyResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#regex DataOciUsageProxyResources#regex}.

---

### DataOciUsageProxyResourcesResourcesCollection <a name="DataOciUsageProxyResourcesResourcesCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection()
```


### DataOciUsageProxyResourcesResourcesCollectionItems <a name="DataOciUsageProxyResourcesResourcesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems()
```


### DataOciUsageProxyResourcesResourcesCollectionItemsSkus <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkus" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyResourcesFilterList <a name="DataOciUsageProxyResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]]

---


### DataOciUsageProxyResourcesFilterOutputReference <a name="DataOciUsageProxyResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciUsageProxyResourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter">DataOciUsageProxyResourcesFilter</a>]

---


### DataOciUsageProxyResourcesResourcesCollectionItemsList <a name="DataOciUsageProxyResourcesResourcesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.childResources">child_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.dailyUnitDisplayName">daily_unit_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.hourlyUnitDisplayName">hourly_unit_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.isPurchased">is_purchased</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.rawUnitDisplayName">raw_unit_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.servicename">servicename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.skus">skus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList">DataOciUsageProxyResourcesResourcesCollectionItemsSkusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.usageDataType">usage_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems">DataOciUsageProxyResourcesResourcesCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_resources`<sup>Required</sup> <a name="child_resources" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.childResources"></a>

```python
child_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `daily_unit_display_name`<sup>Required</sup> <a name="daily_unit_display_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.dailyUnitDisplayName"></a>

```python
daily_unit_display_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hourly_unit_display_name`<sup>Required</sup> <a name="hourly_unit_display_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.hourlyUnitDisplayName"></a>

```python
hourly_unit_display_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `is_purchased`<sup>Required</sup> <a name="is_purchased" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.isPurchased"></a>

```python
is_purchased: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `raw_unit_display_name`<sup>Required</sup> <a name="raw_unit_display_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.rawUnitDisplayName"></a>

```python
raw_unit_display_name: str
```

- *Type:* str

---

##### `servicename`<sup>Required</sup> <a name="servicename" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.servicename"></a>

```python
servicename: str
```

- *Type:* str

---

##### `skus`<sup>Required</sup> <a name="skus" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.skus"></a>

```python
skus: DataOciUsageProxyResourcesResourcesCollectionItemsSkusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList">DataOciUsageProxyResourcesResourcesCollectionItemsSkusList</a>

---

##### `usage_data_type`<sup>Required</sup> <a name="usage_data_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.usageDataType"></a>

```python
usage_data_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyResourcesResourcesCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems">DataOciUsageProxyResourcesResourcesCollectionItems</a>

---


### DataOciUsageProxyResourcesResourcesCollectionItemsSkusList <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkusList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.cloudCreditType">cloud_credit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuId">sku_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuType">sku_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus">DataOciUsageProxyResourcesResourcesCollectionItemsSkus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_credit_type`<sup>Required</sup> <a name="cloud_credit_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.cloudCreditType"></a>

```python
cloud_credit_type: str
```

- *Type:* str

---

##### `sku_id`<sup>Required</sup> <a name="sku_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuId"></a>

```python
sku_id: str
```

- *Type:* str

---

##### `sku_type`<sup>Required</sup> <a name="sku_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuType"></a>

```python
sku_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyResourcesResourcesCollectionItemsSkus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus">DataOciUsageProxyResourcesResourcesCollectionItemsSkus</a>

---


### DataOciUsageProxyResourcesResourcesCollectionList <a name="DataOciUsageProxyResourcesResourcesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourcesResourcesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyResourcesResourcesCollectionOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resources

dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList">DataOciUsageProxyResourcesResourcesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection">DataOciUsageProxyResourcesResourcesCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.items"></a>

```python
items: DataOciUsageProxyResourcesResourcesCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList">DataOciUsageProxyResourcesResourcesCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyResourcesResourcesCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection">DataOciUsageProxyResourcesResourcesCollection</a>

---



