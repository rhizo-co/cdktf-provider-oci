# `dataOciMarketplaceListingPackageAgreements` Submodule <a name="`dataOciMarketplaceListingPackageAgreements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceListingPackageAgreements <a name="DataOciMarketplaceListingPackageAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements oci_marketplace_listing_package_agreements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements(
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
  package_version: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#filter DataOciMarketplaceListingPackageAgreements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMarketplaceListingPackageAgreements resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMarketplaceListingPackageAgreements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMarketplaceListingPackageAgreements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMarketplaceListingPackageAgreements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceListingPackageAgreements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.agreements">agreements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList">DataOciMarketplaceListingPackageAgreementsAgreementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList">DataOciMarketplaceListingPackageAgreementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agreements`<sup>Required</sup> <a name="agreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.agreements"></a>

```python
agreements: DataOciMarketplaceListingPackageAgreementsAgreementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList">DataOciMarketplaceListingPackageAgreementsAgreementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filter"></a>

```python
filter: DataOciMarketplaceListingPackageAgreementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList">DataOciMarketplaceListingPackageAgreementsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceListingPackageAgreementsAgreements <a name="DataOciMarketplaceListingPackageAgreementsAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements()
```


### DataOciMarketplaceListingPackageAgreementsConfig <a name="DataOciMarketplaceListingPackageAgreementsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  listing_id: str,
  package_version: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}.

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#filter DataOciMarketplaceListingPackageAgreements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMarketplaceListingPackageAgreementsFilter <a name="DataOciMarketplaceListingPackageAgreementsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#name DataOciMarketplaceListingPackageAgreements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#values DataOciMarketplaceListingPackageAgreements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#regex DataOciMarketplaceListingPackageAgreements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#name DataOciMarketplaceListingPackageAgreements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#values DataOciMarketplaceListingPackageAgreements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#regex DataOciMarketplaceListingPackageAgreements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceListingPackageAgreementsAgreementsList <a name="DataOciMarketplaceListingPackageAgreementsAgreementsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference <a name="DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements">DataOciMarketplaceListingPackageAgreementsAgreements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author`<sup>Required</sup> <a name="author" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceListingPackageAgreementsAgreements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements">DataOciMarketplaceListingPackageAgreementsAgreements</a>

---


### DataOciMarketplaceListingPackageAgreementsFilterList <a name="DataOciMarketplaceListingPackageAgreementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceListingPackageAgreementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMarketplaceListingPackageAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]]

---


### DataOciMarketplaceListingPackageAgreementsFilterOutputReference <a name="DataOciMarketplaceListingPackageAgreementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_listing_package_agreements

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMarketplaceListingPackageAgreementsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>]

---



