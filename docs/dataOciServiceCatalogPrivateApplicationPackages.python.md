# `dataOciServiceCatalogPrivateApplicationPackages` Submodule <a name="`dataOciServiceCatalogPrivateApplicationPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplicationPackages <a name="DataOciServiceCatalogPrivateApplicationPackages" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages oci_service_catalog_private_application_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_application_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]] = None,
  id: str = None,
  package_type: typing.List[str] = None,
  private_application_package_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.privateApplicationId">private_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.packageType">package_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.privateApplicationPackageId">private_application_package_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_application_id`<sup>Required</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.privateApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#filter DataOciServiceCatalogPrivateApplicationPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.packageType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}.

---

##### `private_application_package_id`<sup>Optional</sup> <a name="private_application_package_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.privateApplicationPackageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPackageType">reset_package_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPrivateApplicationPackageId">reset_private_application_package_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_package_type` <a name="reset_package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPackageType"></a>

```python
def reset_package_type() -> None
```

##### `reset_private_application_package_id` <a name="reset_private_application_package_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPrivateApplicationPackageId"></a>

```python
def reset_private_application_package_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplicationPackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceCatalogPrivateApplicationPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplicationPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList">DataOciServiceCatalogPrivateApplicationPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageCollection">private_application_package_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageTypeInput">package_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationIdInput">private_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageIdInput">private_application_package_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageType">package_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationId">private_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageId">private_application_package_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filter"></a>

```python
filter: DataOciServiceCatalogPrivateApplicationPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList">DataOciServiceCatalogPrivateApplicationPackagesFilterList</a>

---

##### `private_application_package_collection`<sup>Required</sup> <a name="private_application_package_collection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageCollection"></a>

```python
private_application_package_collection: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageTypeInput"></a>

```python
package_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_application_id_input`<sup>Optional</sup> <a name="private_application_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationIdInput"></a>

```python
private_application_id_input: str
```

- *Type:* str

---

##### `private_application_package_id_input`<sup>Optional</sup> <a name="private_application_package_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageIdInput"></a>

```python
private_application_package_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageType"></a>

```python
package_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_application_id`<sup>Required</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationId"></a>

```python
private_application_id: str
```

- *Type:* str

---

##### `private_application_package_id`<sup>Required</sup> <a name="private_application_package_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageId"></a>

```python
private_application_package_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationPackagesConfig <a name="DataOciServiceCatalogPrivateApplicationPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_application_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]] = None,
  id: str = None,
  package_type: typing.List[str] = None,
  private_application_package_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationId">private_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.packageType">package_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationPackageId">private_application_package_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_application_id`<sup>Required</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationId"></a>

```python
private_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#filter DataOciServiceCatalogPrivateApplicationPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.packageType"></a>

```python
package_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}.

---

##### `private_application_package_id`<sup>Optional</sup> <a name="private_application_package_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationPackageId"></a>

```python
private_application_package_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}.

---

### DataOciServiceCatalogPrivateApplicationPackagesFilter <a name="DataOciServiceCatalogPrivateApplicationPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#name DataOciServiceCatalogPrivateApplicationPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#values DataOciServiceCatalogPrivateApplicationPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#regex DataOciServiceCatalogPrivateApplicationPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#name DataOciServiceCatalogPrivateApplicationPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#values DataOciServiceCatalogPrivateApplicationPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#regex DataOciServiceCatalogPrivateApplicationPackages#regex}.

---

### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection()
```


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationPackagesFilterList <a name="DataOciServiceCatalogPrivateApplicationPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciServiceCatalogPrivateApplicationPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]]

---


### DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciServiceCatalogPrivateApplicationPackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>]

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.privateApplicationId">private_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `private_application_id`<sup>Required</sup> <a name="private_application_id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.privateApplicationId"></a>

```python
private_application_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_catalog_private_application_packages

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.items"></a>

```python
items: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection</a>

---



