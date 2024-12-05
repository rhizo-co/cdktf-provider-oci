# `dataOciMarketplaceAcceptedAgreements` Submodule <a name="`dataOciMarketplaceAcceptedAgreements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements oci_marketplace_accepted_agreements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements(
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
  accepted_agreement_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]] = None,
  id: str = None,
  listing_id: str = None,
  package_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.acceptedAgreementId">accepted_agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}.

---

##### `accepted_agreement_id`<sup>Optional</sup> <a name="accepted_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.acceptedAgreementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#filter DataOciMarketplaceAcceptedAgreements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listing_id`<sup>Optional</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId">reset_accepted_agreement_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId">reset_listing_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion">reset_package_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]

---

##### `reset_accepted_agreement_id` <a name="reset_accepted_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId"></a>

```python
def reset_accepted_agreement_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listing_id` <a name="reset_listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId"></a>

```python
def reset_listing_id() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMarketplaceAcceptedAgreements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMarketplaceAcceptedAgreements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceAcceptedAgreements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements">accepted_agreements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput">accepted_agreement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId">accepted_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accepted_agreements`<sup>Required</sup> <a name="accepted_agreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements"></a>

```python
accepted_agreements: DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter"></a>

```python
filter: DataOciMarketplaceAcceptedAgreementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a>

---

##### `accepted_agreement_id_input`<sup>Optional</sup> <a name="accepted_agreement_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput"></a>

```python
accepted_agreement_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `accepted_agreement_id`<sup>Required</sup> <a name="accepted_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId"></a>

```python
accepted_agreement_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements()
```


### DataOciMarketplaceAcceptedAgreementsConfig <a name="DataOciMarketplaceAcceptedAgreementsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  accepted_agreement_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]] = None,
  id: str = None,
  listing_id: str = None,
  package_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId">accepted_agreement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}.

---

##### `accepted_agreement_id`<sup>Optional</sup> <a name="accepted_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId"></a>

```python
accepted_agreement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#filter DataOciMarketplaceAcceptedAgreements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listing_id`<sup>Optional</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}.

---

### DataOciMarketplaceAcceptedAgreementsFilter <a name="DataOciMarketplaceAcceptedAgreementsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplaceAcceptedAgreementsAcceptedAgreements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a>

---


### DataOciMarketplaceAcceptedAgreementsFilterList <a name="DataOciMarketplaceAcceptedAgreementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplaceAcceptedAgreementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMarketplaceAcceptedAgreementsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]]

---


### DataOciMarketplaceAcceptedAgreementsFilterOutputReference <a name="DataOciMarketplaceAcceptedAgreementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_accepted_agreements

dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMarketplaceAcceptedAgreementsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter">DataOciMarketplaceAcceptedAgreementsFilter</a>]

---



