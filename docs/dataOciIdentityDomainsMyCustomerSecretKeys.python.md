# `dataOciIdentityDomainsMyCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsMyCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys oci_identity_domains_my_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys(
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
  my_customer_secret_key_count: typing.Union[int, float] = None,
  my_customer_secret_key_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.myCustomerSecretKeyCount">my_customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.myCustomerSecretKeyFilter">my_customer_secret_key_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_customer_secret_key_count`<sup>Optional</sup> <a name="my_customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.myCustomerSecretKeyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}.

---

##### `my_customer_secret_key_filter`<sup>Optional</sup> <a name="my_customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.myCustomerSecretKeyFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount">reset_my_customer_secret_key_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter">reset_my_customer_secret_key_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_customer_secret_key_count` <a name="reset_my_customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyCount"></a>

```python
def reset_my_customer_secret_key_count() -> None
```

##### `reset_my_customer_secret_key_filter` <a name="reset_my_customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetMyCustomerSecretKeyFilter"></a>

```python
def reset_my_customer_secret_key_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyCustomerSecretKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys">my_customer_secret_keys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput">my_customer_secret_key_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput">my_customer_secret_key_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount">my_customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter">my_customer_secret_key_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_customer_secret_keys`<sup>Required</sup> <a name="my_customer_secret_keys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeys"></a>

```python
my_customer_secret_keys: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_customer_secret_key_count_input`<sup>Optional</sup> <a name="my_customer_secret_key_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCountInput"></a>

```python
my_customer_secret_key_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_customer_secret_key_filter_input`<sup>Optional</sup> <a name="my_customer_secret_key_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilterInput"></a>

```python
my_customer_secret_key_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_customer_secret_key_count`<sup>Required</sup> <a name="my_customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyCount"></a>

```python
my_customer_secret_key_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_customer_secret_key_filter`<sup>Required</sup> <a name="my_customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.myCustomerSecretKeyFilter"></a>

```python
my_customer_secret_key_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysConfig <a name="DataOciIdentityDomainsMyCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig(
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
  my_customer_secret_key_count: typing.Union[int, float] = None,
  my_customer_secret_key_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount">my_customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter">my_customer_secret_key_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsMyCustomerSecretKeys#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#authorization DataOciIdentityDomainsMyCustomerSecretKeys#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#compartment_id DataOciIdentityDomainsMyCustomerSecretKeys#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#id DataOciIdentityDomainsMyCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_customer_secret_key_count`<sup>Optional</sup> <a name="my_customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyCount"></a>

```python
my_customer_secret_key_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_count DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_count}.

---

##### `my_customer_secret_key_filter`<sup>Optional</sup> <a name="my_customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.myCustomerSecretKeyFilter"></a>

```python
my_customer_secret_key_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#my_customer_secret_key_filter DataOciIdentityDomainsMyCustomerSecretKeys#my_customer_secret_key_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsMyCustomerSecretKeys#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_by DataOciIdentityDomainsMyCustomerSecretKeys#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#sort_order DataOciIdentityDomainsMyCustomerSecretKeys#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_customer_secret_keys#start_index DataOciIdentityDomainsMyCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys()
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy()
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta()
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags()
```


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeys</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_customer_secret_keys

dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCustomerSecretKeys.DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser">DataOciIdentityDomainsMyCustomerSecretKeysMyCustomerSecretKeysUser</a>

---



