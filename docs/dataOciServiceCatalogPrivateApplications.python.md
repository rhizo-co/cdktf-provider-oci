# `dataOciServiceCatalogPrivateApplications` Submodule <a name="`dataOciServiceCatalogPrivateApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplications <a name="DataOciServiceCatalogPrivateApplications" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications(
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
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]] = None,
  id: str = None,
  private_application_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.privateApplicationId">private_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_application_id`<sup>Optional</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.privateApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId">reset_private_application_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_application_id` <a name="reset_private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId"></a>

```python
def reset_private_application_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplications to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceCatalogPrivateApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection">private_application_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput">private_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId">private_application_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter"></a>

```python
filter: DataOciServiceCatalogPrivateApplicationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a>

---

##### `private_application_collection`<sup>Required</sup> <a name="private_application_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection"></a>

```python
private_application_collection: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_application_id_input`<sup>Optional</sup> <a name="private_application_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput"></a>

```python
private_application_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_application_id`<sup>Required</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId"></a>

```python
private_application_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationsConfig <a name="DataOciServiceCatalogPrivateApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]] = None,
  id: str = None,
  private_application_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId">private_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_application_id`<sup>Optional</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId"></a>

```python
private_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

### DataOciServiceCatalogPrivateApplicationsFilter <a name="DataOciServiceCatalogPrivateApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}.

---

### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection()
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems()
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo()
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationsFilterList <a name="DataOciServiceCatalogPrivateApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]]

---


### DataOciServiceCatalogPrivateApplicationsFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceCatalogPrivateApplicationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>]

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo">logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded">logo_file_base64_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo"></a>

```python
logo: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a>

---

##### `logo_file_base64_encoded`<sup>Required</sup> <a name="logo_file_base64_encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded"></a>

```python
logo_file_base64_encoded: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails"></a>

```python
package_details: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded">zip_file_base64_encoded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zip_file_base64_encoded`<sup>Required</sup> <a name="zip_file_base64_encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```python
zip_file_base64_encoded: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_applications

dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a>

---



