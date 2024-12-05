# `dataOciIdentityDomainsCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys oci_identity_domains_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys(
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
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  customer_secret_key_count: typing.Union[int, float] = None,
  customer_secret_key_filter: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyCount">customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyFilter">customer_secret_key_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}.

---

##### `customer_secret_key_count`<sup>Optional</sup> <a name="customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}.

---

##### `customer_secret_key_filter`<sup>Optional</sup> <a name="customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount">reset_customer_secret_key_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter">reset_customer_secret_key_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_customer_secret_key_count` <a name="reset_customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount"></a>

```python
def reset_customer_secret_key_count() -> None
```

##### `reset_customer_secret_key_filter` <a name="reset_customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter"></a>

```python
def reset_customer_secret_key_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsCustomerSecretKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys">customer_secret_keys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput">customer_secret_key_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput">customer_secret_key_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount">customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter">customer_secret_key_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `customer_secret_keys`<sup>Required</sup> <a name="customer_secret_keys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys"></a>

```python
customer_secret_keys: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `customer_secret_key_count_input`<sup>Optional</sup> <a name="customer_secret_key_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput"></a>

```python
customer_secret_key_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_secret_key_filter_input`<sup>Optional</sup> <a name="customer_secret_key_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput"></a>

```python
customer_secret_key_filter_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `customer_secret_key_count`<sup>Required</sup> <a name="customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount"></a>

```python
customer_secret_key_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_secret_key_filter`<sup>Required</sup> <a name="customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter"></a>

```python
customer_secret_key_filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCustomerSecretKeysConfig <a name="DataOciIdentityDomainsCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  customer_secret_key_count: typing.Union[int, float] = None,
  customer_secret_key_filter: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount">customer_secret_key_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter">customer_secret_key_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}.

---

##### `customer_secret_key_count`<sup>Optional</sup> <a name="customer_secret_key_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount"></a>

```python
customer_secret_key_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}.

---

##### `customer_secret_key_filter`<sup>Optional</sup> <a name="customer_secret_key_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter"></a>

```python
customer_secret_key_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser()
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
urnietfparamsscimschemasoracleidcsextensionself_change_user: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user"></a>

```python
user: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allow_self_change</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_self_change`<sup>Required</sup> <a name="allow_self_change" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```python
allow_self_change: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_customer_secret_keys

dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a>

---



