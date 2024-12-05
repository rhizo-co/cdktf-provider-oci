# `dataOciServiceManagerProxyServiceEnvironments` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironments <a name="DataOciServiceManagerProxyServiceEnvironments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments oci_service_manager_proxy_service_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]] = None,
  id: str = None,
  service_environment_id: str = None,
  service_environment_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.serviceEnvironmentType">service_environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#filter DataOciServiceManagerProxyServiceEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_environment_id`<sup>Optional</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.serviceEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}.

---

##### `service_environment_type`<sup>Optional</sup> <a name="service_environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.serviceEnvironmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId">reset_service_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType">reset_service_environment_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_environment_id` <a name="reset_service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId"></a>

```python
def reset_service_environment_id() -> None
```

##### `reset_service_environment_type` <a name="reset_service_environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType"></a>

```python
def reset_service_environment_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceManagerProxyServiceEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection">service_environment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput">service_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput">service_environment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType">service_environment_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter"></a>

```python
filter: DataOciServiceManagerProxyServiceEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a>

---

##### `service_environment_collection`<sup>Required</sup> <a name="service_environment_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection"></a>

```python
service_environment_collection: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_environment_id_input`<sup>Optional</sup> <a name="service_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput"></a>

```python
service_environment_id_input: str
```

- *Type:* str

---

##### `service_environment_type_input`<sup>Optional</sup> <a name="service_environment_type_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput"></a>

```python
service_environment_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_environment_id`<sup>Required</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId"></a>

```python
service_environment_id: str
```

- *Type:* str

---

##### `service_environment_type`<sup>Required</sup> <a name="service_environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType"></a>

```python
service_environment_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentsConfig <a name="DataOciServiceManagerProxyServiceEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]] = None,
  id: str = None,
  service_environment_id: str = None,
  service_environment_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType">service_environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#filter DataOciServiceManagerProxyServiceEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_environment_id`<sup>Optional</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId"></a>

```python
service_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}.

---

##### `service_environment_type`<sup>Optional</sup> <a name="service_environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType"></a>

```python
service_environment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}.

---

### DataOciServiceManagerProxyServiceEnvironmentsFilter <a name="DataOciServiceManagerProxyServiceEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}.

---

### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection()
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems()
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition()
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentsFilterList <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceManagerProxyServiceEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]]

---


### DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceManagerProxyServiceEnvironmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>]

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl">console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition">service_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints">service_environment_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `console_url`<sup>Required</sup> <a name="console_url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_definition`<sup>Required</sup> <a name="service_definition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition"></a>

```python
service_definition: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a>

---

##### `service_environment_endpoints`<sup>Required</sup> <a name="service_environment_endpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints"></a>

```python
service_environment_endpoints: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName">short_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `short_display_name`<sup>Required</sup> <a name="short_display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName"></a>

```python
short_display_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environments

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a>

---



