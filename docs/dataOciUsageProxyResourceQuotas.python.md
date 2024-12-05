# `dataOciUsageProxyResourceQuotas` Submodule <a name="`dataOciUsageProxyResourceQuotas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyResourceQuotas <a name="DataOciUsageProxyResourceQuotas" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas oci_usage_proxy_resource_quotas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas(
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
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]] = None,
  id: str = None,
  service_entitlement: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceEntitlement">service_entitlement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#filter DataOciUsageProxyResourceQuotas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_entitlement`<sup>Optional</sup> <a name="service_entitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceEntitlement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetServiceEntitlement">reset_service_entitlement</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_entitlement` <a name="reset_service_entitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetServiceEntitlement"></a>

```python
def reset_service_entitlement() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxyResourceQuotas resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxyResourceQuotas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxyResourceQuotas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxyResourceQuotas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyResourceQuotas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList">DataOciUsageProxyResourceQuotasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.resourceQuotumCollection">resource_quotum_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlementInput">service_entitlement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlement">service_entitlement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filter"></a>

```python
filter: DataOciUsageProxyResourceQuotasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList">DataOciUsageProxyResourceQuotasFilterList</a>

---

##### `resource_quotum_collection`<sup>Required</sup> <a name="resource_quotum_collection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.resourceQuotumCollection"></a>

```python
resource_quotum_collection: DataOciUsageProxyResourceQuotasResourceQuotumCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_entitlement_input`<sup>Optional</sup> <a name="service_entitlement_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlementInput"></a>

```python
service_entitlement_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_entitlement`<sup>Required</sup> <a name="service_entitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlement"></a>

```python
service_entitlement: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyResourceQuotasConfig <a name="DataOciUsageProxyResourceQuotasConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_name: str,
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]] = None,
  id: str = None,
  service_entitlement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceEntitlement">service_entitlement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#filter DataOciUsageProxyResourceQuotas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_entitlement`<sup>Optional</sup> <a name="service_entitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceEntitlement"></a>

```python
service_entitlement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}.

---

### DataOciUsageProxyResourceQuotasFilter <a name="DataOciUsageProxyResourceQuotasFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#name DataOciUsageProxyResourceQuotas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#values DataOciUsageProxyResourceQuotas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#regex DataOciUsageProxyResourceQuotas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#name DataOciUsageProxyResourceQuotas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#values DataOciUsageProxyResourceQuotas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#regex DataOciUsageProxyResourceQuotas#regex}.

---

### DataOciUsageProxyResourceQuotasResourceQuotumCollection <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection()
```


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyResourceQuotasFilterList <a name="DataOciUsageProxyResourceQuotasFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourceQuotasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciUsageProxyResourceQuotasFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]]

---


### DataOciUsageProxyResourceQuotasFilterOutputReference <a name="DataOciUsageProxyResourceQuotasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciUsageProxyResourceQuotasFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>]

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.affectedResource">affected_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.balance">balance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isAllowed">is_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isDependency">is_dependency</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isOverage">is_overage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.purchasedLimit">purchased_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `affected_resource`<sup>Required</sup> <a name="affected_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.affectedResource"></a>

```python
affected_resource: str
```

- *Type:* str

---

##### `balance`<sup>Required</sup> <a name="balance" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.balance"></a>

```python
balance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_allowed`<sup>Required</sup> <a name="is_allowed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isAllowed"></a>

```python
is_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dependency`<sup>Required</sup> <a name="is_dependency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isDependency"></a>

```python
is_dependency: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_overage`<sup>Required</sup> <a name="is_overage" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isOverage"></a>

```python
is_overage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purchased_limit`<sup>Required</sup> <a name="purchased_limit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.purchasedLimit"></a>

```python
purchased_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems</a>

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionList <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_resource_quotas

dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.isAllowed">is_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection">DataOciUsageProxyResourceQuotasResourceQuotumCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_allowed`<sup>Required</sup> <a name="is_allowed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.isAllowed"></a>

```python
is_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.items"></a>

```python
items: DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxyResourceQuotasResourceQuotumCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection">DataOciUsageProxyResourceQuotasResourceQuotumCollection</a>

---



