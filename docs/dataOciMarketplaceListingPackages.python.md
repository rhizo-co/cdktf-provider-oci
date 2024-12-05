# `dataOciMarketplaceListingPackages` Submodule <a name="`dataOciMarketplaceListingPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceListingPackages <a name="DataOciMarketplaceListingPackages" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages oci_marketplace_listing_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listing_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]] = None,
  id: str = None,
  package_type: str = None,
  package_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#listing_id DataOciMarketplaceListingPackages#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#compartment_id DataOciMarketplaceListingPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#id DataOciMarketplaceListingPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_type DataOciMarketplaceListingPackages#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_version DataOciMarketplaceListingPackages#package_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#listing_id DataOciMarketplaceListingPackages#listing_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#compartment_id DataOciMarketplaceListingPackages#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#filter DataOciMarketplaceListingPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#id DataOciMarketplaceListingPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.packageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_type DataOciMarketplaceListingPackages#package_type}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.Initializer.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_version DataOciMarketplaceListingPackages#package_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetPackageType">reset_package_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetPackageVersion">reset_package_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_package_type` <a name="reset_package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetPackageType"></a>

```python
def reset_package_type() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMarketplaceListingPackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMarketplaceListingPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMarketplaceListingPackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMarketplaceListingPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceListingPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList">DataOciMarketplaceListingPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingPackages">listing_packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList">DataOciMarketplaceListingPackagesListingPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageTypeInput">package_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.filter"></a>

```python
filter: DataOciMarketplaceListingPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList">DataOciMarketplaceListingPackagesFilterList</a>

---

##### `listing_packages`<sup>Required</sup> <a name="listing_packages" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingPackages"></a>

```python
listing_packages: DataOciMarketplaceListingPackagesListingPackagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList">DataOciMarketplaceListingPackagesListingPackagesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageTypeInput"></a>

```python
package_type_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceListingPackagesConfig <a name="DataOciMarketplaceListingPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listing_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]] = None,
  id: str = None,
  package_type: str = None,
  package_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#listing_id DataOciMarketplaceListingPackages#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#compartment_id DataOciMarketplaceListingPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#id DataOciMarketplaceListingPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.packageType">package_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_type DataOciMarketplaceListingPackages#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_version DataOciMarketplaceListingPackages#package_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#listing_id DataOciMarketplaceListingPackages#listing_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#compartment_id DataOciMarketplaceListingPackages#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#filter DataOciMarketplaceListingPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#id DataOciMarketplaceListingPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_type DataOciMarketplaceListingPackages#package_type}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#package_version DataOciMarketplaceListingPackages#package_version}.

---

### DataOciMarketplaceListingPackagesFilter <a name="DataOciMarketplaceListingPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#name DataOciMarketplaceListingPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#values DataOciMarketplaceListingPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#regex DataOciMarketplaceListingPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#name DataOciMarketplaceListingPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#values DataOciMarketplaceListingPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_packages#regex DataOciMarketplaceListingPackages#regex}.

---

### DataOciMarketplaceListingPackagesListingPackages <a name="DataOciMarketplaceListingPackagesListingPackages" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackages()
```


### DataOciMarketplaceListingPackagesListingPackagesOperatingSystem <a name="DataOciMarketplaceListingPackagesListingPackagesOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystem()
```


### DataOciMarketplaceListingPackagesListingPackagesPricing <a name="DataOciMarketplaceListingPackagesListingPackagesPricing" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricing"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricing.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricing()
```


### DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice <a name="DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice()
```


### DataOciMarketplaceListingPackagesListingPackagesRegions <a name="DataOciMarketplaceListingPackagesListingPackagesRegions" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegions()
```


### DataOciMarketplaceListingPackagesListingPackagesRegionsCountries <a name="DataOciMarketplaceListingPackagesListingPackagesRegionsCountries" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceListingPackagesFilterList <a name="DataOciMarketplaceListingPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]]

---


### DataOciMarketplaceListingPackagesFilterOutputReference <a name="DataOciMarketplaceListingPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMarketplaceListingPackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesFilter">DataOciMarketplaceListingPackagesFilter</a>]

---


### DataOciMarketplaceListingPackagesListingPackagesList <a name="DataOciMarketplaceListingPackagesListingPackagesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList <a name="DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystem">DataOciMarketplaceListingPackagesListingPackagesOperatingSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackagesOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystem">DataOciMarketplaceListingPackagesListingPackagesOperatingSystem</a>

---


### DataOciMarketplaceListingPackagesListingPackagesOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList">DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.pricing">pricing</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList">DataOciMarketplaceListingPackagesListingPackagesPricingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.regions">regions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList">DataOciMarketplaceListingPackagesListingPackagesRegionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackages">DataOciMarketplaceListingPackagesListingPackages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.operatingSystem"></a>

```python
operating_system: DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList">DataOciMarketplaceListingPackagesListingPackagesOperatingSystemList</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `pricing`<sup>Required</sup> <a name="pricing" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.pricing"></a>

```python
pricing: DataOciMarketplaceListingPackagesListingPackagesPricingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList">DataOciMarketplaceListingPackagesListingPackagesPricingList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.regions"></a>

```python
regions: DataOciMarketplaceListingPackagesListingPackagesRegionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList">DataOciMarketplaceListingPackagesListingPackagesRegionsList</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackages">DataOciMarketplaceListingPackagesListingPackages</a>

---


### DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList <a name="DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.currencySymbol">currency_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice">DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `currency_symbol`<sup>Required</sup> <a name="currency_symbol" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.currencySymbol"></a>

```python
currency_symbol: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice">DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPrice</a>

---


### DataOciMarketplaceListingPackagesListingPackagesPricingList <a name="DataOciMarketplaceListingPackagesListingPackagesPricingList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.currency">currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.internationalMarketPrice">international_market_price</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList">DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.payGoStrategy">pay_go_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricing">DataOciMarketplaceListingPackagesListingPackagesPricing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.currency"></a>

```python
currency: str
```

- *Type:* str

---

##### `international_market_price`<sup>Required</sup> <a name="international_market_price" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.internationalMarketPrice"></a>

```python
international_market_price: DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList">DataOciMarketplaceListingPackagesListingPackagesPricingInternationalMarketPriceList</a>

---

##### `pay_go_strategy`<sup>Required</sup> <a name="pay_go_strategy" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.payGoStrategy"></a>

```python
pay_go_strategy: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackagesPricing
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesPricing">DataOciMarketplaceListingPackagesListingPackagesPricing</a>

---


### DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList <a name="DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountries">DataOciMarketplaceListingPackagesListingPackagesRegionsCountries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackagesRegionsCountries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountries">DataOciMarketplaceListingPackagesListingPackagesRegionsCountries</a>

---


### DataOciMarketplaceListingPackagesListingPackagesRegionsList <a name="DataOciMarketplaceListingPackagesListingPackagesRegionsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference <a name="DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_packages

dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.countries">countries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList">DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegions">DataOciMarketplaceListingPackagesListingPackagesRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `countries`<sup>Required</sup> <a name="countries" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.countries"></a>

```python
countries: DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList">DataOciMarketplaceListingPackagesListingPackagesRegionsCountriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackagesListingPackagesRegions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackages.DataOciMarketplaceListingPackagesListingPackagesRegions">DataOciMarketplaceListingPackagesListingPackagesRegions</a>

---



