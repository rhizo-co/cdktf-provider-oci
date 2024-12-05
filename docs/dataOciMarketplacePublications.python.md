# `dataOciMarketplacePublications` Submodule <a name="`dataOciMarketplacePublications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplacePublications <a name="DataOciMarketplacePublications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications oci_marketplace_publications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublications(
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
  listing_type: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]] = None,
  id: str = None,
  name: typing.List[str] = None,
  operating_systems: typing.List[str] = None,
  publication_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.listingType">listing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.publicationId">publication_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}.

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.listingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#filter DataOciMarketplacePublications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.name"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.operatingSystems"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}.

---

##### `publication_id`<sup>Optional</sup> <a name="publication_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.publicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOperatingSystems">reset_operating_systems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetPublicationId">reset_publication_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_operating_systems` <a name="reset_operating_systems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOperatingSystems"></a>

```python
def reset_operating_systems() -> None
```

##### `reset_publication_id` <a name="reset_publication_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetPublicationId"></a>

```python
def reset_publication_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMarketplacePublications resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublications.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublications.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublications.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublications.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMarketplacePublications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMarketplacePublications to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMarketplacePublications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplacePublications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList">DataOciMarketplacePublicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publications">publications</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList">DataOciMarketplacePublicationsPublicationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingTypeInput">listing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystemsInput">operating_systems_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationIdInput">publication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingType">listing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationId">publication_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filter"></a>

```python
filter: DataOciMarketplacePublicationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList">DataOciMarketplacePublicationsFilterList</a>

---

##### `publications`<sup>Required</sup> <a name="publications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publications"></a>

```python
publications: DataOciMarketplacePublicationsPublicationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList">DataOciMarketplacePublicationsPublicationsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_type_input`<sup>Optional</sup> <a name="listing_type_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingTypeInput"></a>

```python
listing_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operating_systems_input`<sup>Optional</sup> <a name="operating_systems_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystemsInput"></a>

```python
operating_systems_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publication_id_input`<sup>Optional</sup> <a name="publication_id_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationIdInput"></a>

```python
publication_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingType"></a>

```python
listing_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operating_systems`<sup>Required</sup> <a name="operating_systems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publication_id`<sup>Required</sup> <a name="publication_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationId"></a>

```python
publication_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplacePublicationsConfig <a name="DataOciMarketplacePublicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  listing_type: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]] = None,
  id: str = None,
  name: typing.List[str] = None,
  operating_systems: typing.List[str] = None,
  publication_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.listingType">listing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.operatingSystems">operating_systems</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.publicationId">publication_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}.

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.listingType"></a>

```python
listing_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#filter DataOciMarketplacePublications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `operating_systems`<sup>Optional</sup> <a name="operating_systems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.operatingSystems"></a>

```python
operating_systems: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}.

---

##### `publication_id`<sup>Optional</sup> <a name="publication_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.publicationId"></a>

```python
publication_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}.

---

### DataOciMarketplacePublicationsFilter <a name="DataOciMarketplacePublicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#values DataOciMarketplacePublications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#regex DataOciMarketplacePublications#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#values DataOciMarketplacePublications#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#regex DataOciMarketplacePublications#regex}.

---

### DataOciMarketplacePublicationsPublications <a name="DataOciMarketplacePublicationsPublications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications()
```


### DataOciMarketplacePublicationsPublicationsIcon <a name="DataOciMarketplacePublicationsPublicationsIcon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon()
```


### DataOciMarketplacePublicationsPublicationsPackageDetails <a name="DataOciMarketplacePublicationsPublicationsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails()
```


### DataOciMarketplacePublicationsPublicationsPackageDetailsEula <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula()
```


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem()
```


### DataOciMarketplacePublicationsPublicationsSupportContacts <a name="DataOciMarketplacePublicationsPublicationsSupportContacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts()
```


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplacePublicationsFilterList <a name="DataOciMarketplacePublicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMarketplacePublicationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]]

---


### DataOciMarketplacePublicationsFilterOutputReference <a name="DataOciMarketplacePublicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMarketplacePublicationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>]

---


### DataOciMarketplacePublicationsPublicationsIconList <a name="DataOciMarketplacePublicationsPublicationsIconList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsIconOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsIconOutputReference <a name="DataOciMarketplacePublicationsPublicationsIconOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.contentUrl">content_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon">DataOciMarketplacePublicationsPublicationsIcon</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_url`<sup>Required</sup> <a name="content_url" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.contentUrl"></a>

```python
content_url: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsIcon
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon">DataOciMarketplacePublicationsPublicationsIcon</a>

---


### DataOciMarketplacePublicationsPublicationsList <a name="DataOciMarketplacePublicationsPublicationsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsOutputReference <a name="DataOciMarketplacePublicationsPublicationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.icon">icon</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList">DataOciMarketplacePublicationsPublicationsIconList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.isAgreementAcknowledged">is_agreement_acknowledged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.listingType">listing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageDetails">package_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList">DataOciMarketplacePublicationsPublicationsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportContacts">support_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList">DataOciMarketplacePublicationsPublicationsSupportContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportedOperatingSystems">supported_operating_systems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications">DataOciMarketplacePublicationsPublications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `icon`<sup>Required</sup> <a name="icon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.icon"></a>

```python
icon: DataOciMarketplacePublicationsPublicationsIconList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList">DataOciMarketplacePublicationsPublicationsIconList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_agreement_acknowledged`<sup>Required</sup> <a name="is_agreement_acknowledged" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.isAgreementAcknowledged"></a>

```python
is_agreement_acknowledged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `listing_type`<sup>Required</sup> <a name="listing_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.listingType"></a>

```python
listing_type: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_details`<sup>Required</sup> <a name="package_details" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageDetails"></a>

```python
package_details: DataOciMarketplacePublicationsPublicationsPackageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList">DataOciMarketplacePublicationsPublicationsPackageDetailsList</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `support_contacts`<sup>Required</sup> <a name="support_contacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportContacts"></a>

```python
support_contacts: DataOciMarketplacePublicationsPublicationsSupportContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList">DataOciMarketplacePublicationsPublicationsSupportContactsList</a>

---

##### `supported_operating_systems`<sup>Required</sup> <a name="supported_operating_systems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportedOperatingSystems"></a>

```python
supported_operating_systems: DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublications
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications">DataOciMarketplacePublicationsPublications</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.eulaType">eula_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.licenseText">license_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula">DataOciMarketplacePublicationsPublicationsPackageDetailsEula</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eula_type`<sup>Required</sup> <a name="eula_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.eulaType"></a>

```python
eula_type: str
```

- *Type:* str

---

##### `license_text`<sup>Required</sup> <a name="license_text" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.licenseText"></a>

```python
license_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsPackageDetailsEula
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula">DataOciMarketplacePublicationsPublicationsPackageDetailsEula</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.eula">eula</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList">DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.operatingSystem">operating_system</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails">DataOciMarketplacePublicationsPublicationsPackageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eula`<sup>Required</sup> <a name="eula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.eula"></a>

```python
eula: DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList">DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList</a>

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.operatingSystem"></a>

```python
operating_system: DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList</a>

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails">DataOciMarketplacePublicationsPublicationsPackageDetails</a>

---


### DataOciMarketplacePublicationsPublicationsSupportContactsList <a name="DataOciMarketplacePublicationsPublicationsSupportContactsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference <a name="DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts">DataOciMarketplacePublicationsPublicationsSupportContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsSupportContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts">DataOciMarketplacePublicationsPublicationsSupportContacts</a>

---


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_marketplace_publications

dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems</a>

---



