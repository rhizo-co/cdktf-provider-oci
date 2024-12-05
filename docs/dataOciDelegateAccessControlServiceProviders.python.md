# `dataOciDelegateAccessControlServiceProviders` Submodule <a name="`dataOciDelegateAccessControlServiceProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlServiceProviders <a name="DataOciDelegateAccessControlServiceProviders" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers oci_delegate_access_control_service_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]] = None,
  id: str = None,
  name: str = None,
  service_provider_type: str = None,
  state: str = None,
  supported_resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.serviceProviderType">service_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.supportedResourceType">supported_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#filter DataOciDelegateAccessControlServiceProviders#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `service_provider_type`<sup>Optional</sup> <a name="service_provider_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.serviceProviderType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}.

---

##### `supported_resource_type`<sup>Optional</sup> <a name="supported_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.Initializer.parameter.supportedResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetServiceProviderType">reset_service_provider_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetSupportedResourceType">reset_supported_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_service_provider_type` <a name="reset_service_provider_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetServiceProviderType"></a>

```python
def reset_service_provider_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_supported_resource_type` <a name="reset_supported_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.resetSupportedResourceType"></a>

```python
def reset_supported_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlServiceProviders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlServiceProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlServiceProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList">DataOciDelegateAccessControlServiceProvidersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderSummaryCollection">service_provider_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderTypeInput">service_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceTypeInput">supported_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderType">service_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceType">supported_resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filter"></a>

```python
filter: DataOciDelegateAccessControlServiceProvidersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList">DataOciDelegateAccessControlServiceProvidersFilterList</a>

---

##### `service_provider_summary_collection`<sup>Required</sup> <a name="service_provider_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderSummaryCollection"></a>

```python
service_provider_summary_collection: DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_provider_type_input`<sup>Optional</sup> <a name="service_provider_type_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderTypeInput"></a>

```python
service_provider_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `supported_resource_type_input`<sup>Optional</sup> <a name="supported_resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceTypeInput"></a>

```python
supported_resource_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_provider_type`<sup>Required</sup> <a name="service_provider_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.serviceProviderType"></a>

```python
service_provider_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_resource_type`<sup>Required</sup> <a name="supported_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.supportedResourceType"></a>

```python
supported_resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProviders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlServiceProvidersConfig <a name="DataOciDelegateAccessControlServiceProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]] = None,
  id: str = None,
  name: str = None,
  service_provider_type: str = None,
  state: str = None,
  supported_resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.serviceProviderType">service_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.supportedResourceType">supported_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#compartment_id DataOciDelegateAccessControlServiceProviders#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#filter DataOciDelegateAccessControlServiceProviders#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#id DataOciDelegateAccessControlServiceProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `service_provider_type`<sup>Optional</sup> <a name="service_provider_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.serviceProviderType"></a>

```python
service_provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#service_provider_type DataOciDelegateAccessControlServiceProviders#service_provider_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#state DataOciDelegateAccessControlServiceProviders#state}.

---

##### `supported_resource_type`<sup>Optional</sup> <a name="supported_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersConfig.property.supportedResourceType"></a>

```python
supported_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#supported_resource_type DataOciDelegateAccessControlServiceProviders#supported_resource_type}.

---

### DataOciDelegateAccessControlServiceProvidersFilter <a name="DataOciDelegateAccessControlServiceProvidersFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#values DataOciDelegateAccessControlServiceProviders#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#regex DataOciDelegateAccessControlServiceProviders#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#name DataOciDelegateAccessControlServiceProviders#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#values DataOciDelegateAccessControlServiceProviders#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_providers#regex DataOciDelegateAccessControlServiceProviders#regex}.

---

### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection()
```


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlServiceProvidersFilterList <a name="DataOciDelegateAccessControlServiceProvidersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlServiceProvidersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlServiceProvidersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]]

---


### DataOciDelegateAccessControlServiceProvidersFilterOutputReference <a name="DataOciDelegateAccessControlServiceProvidersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDelegateAccessControlServiceProvidersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersFilter">DataOciDelegateAccessControlServiceProvidersFilter</a>]

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceProviderType">service_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceTypes">service_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.supportedResourceTypes">supported_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_provider_type`<sup>Required</sup> <a name="service_provider_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceProviderType"></a>

```python
service_provider_type: str
```

- *Type:* str

---

##### `service_types`<sup>Required</sup> <a name="service_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.serviceTypes"></a>

```python
service_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_resource_types`<sup>Required</sup> <a name="supported_resource_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.supportedResourceTypes"></a>

```python
supported_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_service_providers

dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviders.DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection">DataOciDelegateAccessControlServiceProvidersServiceProviderSummaryCollection</a>

---



