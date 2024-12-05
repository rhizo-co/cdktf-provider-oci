# `dataOciIdentityDomainsSocialIdentityProviders` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  social_identity_provider_count: typing.Union[int, float] = None,
  social_identity_provider_filter: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderCount">social_identity_provider_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderFilter">social_identity_provider_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `social_identity_provider_count`<sup>Optional</sup> <a name="social_identity_provider_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `social_identity_provider_filter`<sup>Optional</sup> <a name="social_identity_provider_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount">reset_social_identity_provider_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter">reset_social_identity_provider_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_social_identity_provider_count` <a name="reset_social_identity_provider_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount"></a>

```python
def reset_social_identity_provider_count() -> None
```

##### `reset_social_identity_provider_filter` <a name="reset_social_identity_provider_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter"></a>

```python
def reset_social_identity_provider_filter() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProviders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsSocialIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders">social_identity_providers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput">social_identity_provider_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput">social_identity_provider_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount">social_identity_provider_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter">social_identity_provider_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `social_identity_providers`<sup>Required</sup> <a name="social_identity_providers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders"></a>

```python
social_identity_providers: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a>

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `social_identity_provider_count_input`<sup>Optional</sup> <a name="social_identity_provider_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput"></a>

```python
social_identity_provider_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `social_identity_provider_filter_input`<sup>Optional</sup> <a name="social_identity_provider_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput"></a>

```python
social_identity_provider_filter_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `social_identity_provider_count`<sup>Required</sup> <a name="social_identity_provider_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount"></a>

```python
social_identity_provider_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `social_identity_provider_filter`<sup>Required</sup> <a name="social_identity_provider_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter"></a>

```python
social_identity_provider_filter: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProvidersConfig <a name="DataOciIdentityDomainsSocialIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  social_identity_provider_count: typing.Union[int, float] = None,
  social_identity_provider_filter: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount">social_identity_provider_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter">social_identity_provider_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `social_identity_provider_count`<sup>Optional</sup> <a name="social_identity_provider_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount"></a>

```python
social_identity_provider_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `social_identity_provider_filter`<sup>Optional</sup> <a name="social_identity_provider_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter"></a>

```python
social_identity_provider_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings()
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled">account_linking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope">admin_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl">authz_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled">auto_redirect_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload">client_credential_in_payload</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds">clock_skew_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute">id_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups">jit_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled">jit_prov_group_static_list_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl">refresh_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled">registration_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings">relay_idp_param_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin">show_on_login</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled">social_jit_provisioning_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

---

##### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled"></a>

```python
account_linking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `admin_scope`<sup>Required</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope"></a>

```python
admin_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `authz_url`<sup>Required</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl"></a>

```python
authz_url: str
```

- *Type:* str

---

##### `auto_redirect_enabled`<sup>Required</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled"></a>

```python
auto_redirect_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_credential_in_payload`<sup>Required</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload"></a>

```python
client_credential_in_payload: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `clock_skew_in_seconds`<sup>Required</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds"></a>

```python
clock_skew_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_attribute`<sup>Required</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute"></a>

```python
id_attribute: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jit_prov_assigned_groups`<sup>Required</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups"></a>

```python
jit_prov_assigned_groups: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a>

---

##### `jit_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled"></a>

```python
jit_prov_group_static_list_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `refresh_token_url`<sup>Required</sup> <a name="refresh_token_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl"></a>

```python
refresh_token_url: str
```

- *Type:* str

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled"></a>

```python
registration_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `relay_idp_param_mappings`<sup>Required</sup> <a name="relay_idp_param_mappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings"></a>

```python
relay_idp_param_mappings: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a>

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `show_on_login`<sup>Required</sup> <a name="show_on_login" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin"></a>

```python
show_on_login: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `social_jit_provisioning_enabled`<sup>Required</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled"></a>

```python
social_jit_provisioning_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey">relay_param_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue">relay_param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relay_param_key`<sup>Required</sup> <a name="relay_param_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```python
relay_param_key: str
```

- *Type:* str

---

##### `relay_param_value`<sup>Required</sup> <a name="relay_param_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```python
relay_param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_providers

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a>

---



