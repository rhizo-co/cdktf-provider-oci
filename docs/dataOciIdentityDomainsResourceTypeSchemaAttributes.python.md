# `dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule <a name="`dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes(
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
  id: str = None,
  resource_type_schema_attribute_count: typing.Union[int, float] = None,
  resource_type_schema_attribute_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaAttributeCount">resource_type_schema_attribute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaAttributeFilter">resource_type_schema_attribute_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_attribute_count`<sup>Optional</sup> <a name="resource_type_schema_attribute_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaAttributeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}.

---

##### `resource_type_schema_attribute_filter`<sup>Optional</sup> <a name="resource_type_schema_attribute_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaAttributeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount">reset_resource_type_schema_attribute_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter">reset_resource_type_schema_attribute_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_attribute_count` <a name="reset_resource_type_schema_attribute_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount"></a>

```python
def reset_resource_type_schema_attribute_count() -> None
```

##### `reset_resource_type_schema_attribute_filter` <a name="reset_resource_type_schema_attribute_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter"></a>

```python
def reset_resource_type_schema_attribute_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsResourceTypeSchemaAttributes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsResourceTypeSchemaAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsResourceTypeSchemaAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes">resource_type_schema_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput">resource_type_schema_attribute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput">resource_type_schema_attribute_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount">resource_type_schema_attribute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter">resource_type_schema_attribute_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type_schema_attributes`<sup>Required</sup> <a name="resource_type_schema_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes"></a>

```python
resource_type_schema_attributes: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_attribute_count_input`<sup>Optional</sup> <a name="resource_type_schema_attribute_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput"></a>

```python
resource_type_schema_attribute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type_schema_attribute_filter_input`<sup>Optional</sup> <a name="resource_type_schema_attribute_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput"></a>

```python
resource_type_schema_attribute_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_attribute_count`<sup>Required</sup> <a name="resource_type_schema_attribute_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount"></a>

```python
resource_type_schema_attribute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type_schema_attribute_filter`<sup>Required</sup> <a name="resource_type_schema_attribute_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter"></a>

```python
resource_type_schema_attribute_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesConfig <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig(
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
  id: str = None,
  resource_type_schema_attribute_count: typing.Union[int, float] = None,
  resource_type_schema_attribute_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount">resource_type_schema_attribute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter">resource_type_schema_attribute_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_attribute_count`<sup>Optional</sup> <a name="resource_type_schema_attribute_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount"></a>

```python
resource_type_schema_attribute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}.

---

##### `resource_type_schema_attribute_filter`<sup>Optional</sup> <a name="resource_type_schema_attribute_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter"></a>

```python
resource_type_schema_attribute_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}.

---

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes()
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy()
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy()
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta()
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues">canonical_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact">case_exact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability">end_user_mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues">end_user_mutability_allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber">idcs_added_since_release_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion">idcs_added_since_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable">idcs_attribute_cacheable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable">idcs_attribute_mappable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable">idcs_auditable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName">idcs_auto_increment_seq_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter">idcs_canonical_value_source_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType">idcs_canonical_value_source_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey">idcs_composite_key</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName">idcs_csv_column_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute">idcs_custom_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber">idcs_deprecated_since_release_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion">idcs_deprecated_since_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName">idcs_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId">idcs_display_name_message_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues">idcs_fetch_complex_attribute_values</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper">idcs_from_target_mapper</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName">idcs_fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated">idcs_generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType">idcs_icf_attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName">idcs_icf_bundle_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired">idcs_icf_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes">idcs_indirect_ref_resource_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal">idcs_internal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength">idcs_max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue">idcs_max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength">idcs_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue">idcs_min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage">idcs_multi_language</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute">idcs_ref_resource_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes">idcs_ref_resource_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn">idcs_schema_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant">idcs_scim_compliant</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable">idcs_searchable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive">idcs_sensitive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName">idcs_target_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom">idcs_target_attribute_name_to_migrate_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName">idcs_target_norm_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName">idcs_target_unique_constraint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper">idcs_to_target_mapper</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue">idcs_trim_string_value</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference">idcs_validate_reference</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted">idcs_value_persisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued">multi_valued</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability">mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes">reference_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required">required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned">returned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness">uniqueness</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canonical_values`<sup>Required</sup> <a name="canonical_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues"></a>

```python
canonical_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `case_exact`<sup>Required</sup> <a name="case_exact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact"></a>

```python
case_exact: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `end_user_mutability`<sup>Required</sup> <a name="end_user_mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability"></a>

```python
end_user_mutability: str
```

- *Type:* str

---

##### `end_user_mutability_allowed_values`<sup>Required</sup> <a name="end_user_mutability_allowed_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues"></a>

```python
end_user_mutability_allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_added_since_release_number`<sup>Required</sup> <a name="idcs_added_since_release_number" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber"></a>

```python
idcs_added_since_release_number: str
```

- *Type:* str

---

##### `idcs_added_since_version`<sup>Required</sup> <a name="idcs_added_since_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion"></a>

```python
idcs_added_since_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_attribute_cacheable`<sup>Required</sup> <a name="idcs_attribute_cacheable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable"></a>

```python
idcs_attribute_cacheable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_attribute_mappable`<sup>Required</sup> <a name="idcs_attribute_mappable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable"></a>

```python
idcs_attribute_mappable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_auditable`<sup>Required</sup> <a name="idcs_auditable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable"></a>

```python
idcs_auditable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_auto_increment_seq_name`<sup>Required</sup> <a name="idcs_auto_increment_seq_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName"></a>

```python
idcs_auto_increment_seq_name: str
```

- *Type:* str

---

##### `idcs_canonical_value_source_filter`<sup>Required</sup> <a name="idcs_canonical_value_source_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter"></a>

```python
idcs_canonical_value_source_filter: str
```

- *Type:* str

---

##### `idcs_canonical_value_source_resource_type`<sup>Required</sup> <a name="idcs_canonical_value_source_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType"></a>

```python
idcs_canonical_value_source_resource_type: str
```

- *Type:* str

---

##### `idcs_composite_key`<sup>Required</sup> <a name="idcs_composite_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey"></a>

```python
idcs_composite_key: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a>

---

##### `idcs_csv_column_header_name`<sup>Required</sup> <a name="idcs_csv_column_header_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName"></a>

```python
idcs_csv_column_header_name: str
```

- *Type:* str

---

##### `idcs_custom_attribute`<sup>Required</sup> <a name="idcs_custom_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute"></a>

```python
idcs_custom_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_deprecated_since_release_number`<sup>Required</sup> <a name="idcs_deprecated_since_release_number" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber"></a>

```python
idcs_deprecated_since_release_number: str
```

- *Type:* str

---

##### `idcs_deprecated_since_version`<sup>Required</sup> <a name="idcs_deprecated_since_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion"></a>

```python
idcs_deprecated_since_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_display_name`<sup>Required</sup> <a name="idcs_display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName"></a>

```python
idcs_display_name: str
```

- *Type:* str

---

##### `idcs_display_name_message_id`<sup>Required</sup> <a name="idcs_display_name_message_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId"></a>

```python
idcs_display_name_message_id: str
```

- *Type:* str

---

##### `idcs_fetch_complex_attribute_values`<sup>Required</sup> <a name="idcs_fetch_complex_attribute_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues"></a>

```python
idcs_fetch_complex_attribute_values: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_from_target_mapper`<sup>Required</sup> <a name="idcs_from_target_mapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper"></a>

```python
idcs_from_target_mapper: str
```

- *Type:* str

---

##### `idcs_fully_qualified_name`<sup>Required</sup> <a name="idcs_fully_qualified_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName"></a>

```python
idcs_fully_qualified_name: str
```

- *Type:* str

---

##### `idcs_generated`<sup>Required</sup> <a name="idcs_generated" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated"></a>

```python
idcs_generated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_icf_attribute_type`<sup>Required</sup> <a name="idcs_icf_attribute_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType"></a>

```python
idcs_icf_attribute_type: str
```

- *Type:* str

---

##### `idcs_icf_bundle_attribute_name`<sup>Required</sup> <a name="idcs_icf_bundle_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName"></a>

```python
idcs_icf_bundle_attribute_name: str
```

- *Type:* str

---

##### `idcs_icf_required`<sup>Required</sup> <a name="idcs_icf_required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired"></a>

```python
idcs_icf_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_indirect_ref_resource_attributes`<sup>Required</sup> <a name="idcs_indirect_ref_resource_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes"></a>

```python
idcs_indirect_ref_resource_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `idcs_internal`<sup>Required</sup> <a name="idcs_internal" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal"></a>

```python
idcs_internal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_max_length`<sup>Required</sup> <a name="idcs_max_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength"></a>

```python
idcs_max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_max_value`<sup>Required</sup> <a name="idcs_max_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue"></a>

```python
idcs_max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_min_length`<sup>Required</sup> <a name="idcs_min_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength"></a>

```python
idcs_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_min_value`<sup>Required</sup> <a name="idcs_min_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue"></a>

```python
idcs_min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idcs_multi_language`<sup>Required</sup> <a name="idcs_multi_language" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage"></a>

```python
idcs_multi_language: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `idcs_ref_resource_attribute`<sup>Required</sup> <a name="idcs_ref_resource_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute"></a>

```python
idcs_ref_resource_attribute: str
```

- *Type:* str

---

##### `idcs_ref_resource_attributes`<sup>Required</sup> <a name="idcs_ref_resource_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes"></a>

```python
idcs_ref_resource_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `idcs_schema_urn`<sup>Required</sup> <a name="idcs_schema_urn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn"></a>

```python
idcs_schema_urn: str
```

- *Type:* str

---

##### `idcs_scim_compliant`<sup>Required</sup> <a name="idcs_scim_compliant" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant"></a>

```python
idcs_scim_compliant: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_searchable`<sup>Required</sup> <a name="idcs_searchable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable"></a>

```python
idcs_searchable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_sensitive`<sup>Required</sup> <a name="idcs_sensitive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive"></a>

```python
idcs_sensitive: str
```

- *Type:* str

---

##### `idcs_target_attribute_name`<sup>Required</sup> <a name="idcs_target_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName"></a>

```python
idcs_target_attribute_name: str
```

- *Type:* str

---

##### `idcs_target_attribute_name_to_migrate_from`<sup>Required</sup> <a name="idcs_target_attribute_name_to_migrate_from" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom"></a>

```python
idcs_target_attribute_name_to_migrate_from: str
```

- *Type:* str

---

##### `idcs_target_norm_attribute_name`<sup>Required</sup> <a name="idcs_target_norm_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName"></a>

```python
idcs_target_norm_attribute_name: str
```

- *Type:* str

---

##### `idcs_target_unique_constraint_name`<sup>Required</sup> <a name="idcs_target_unique_constraint_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName"></a>

```python
idcs_target_unique_constraint_name: str
```

- *Type:* str

---

##### `idcs_to_target_mapper`<sup>Required</sup> <a name="idcs_to_target_mapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper"></a>

```python
idcs_to_target_mapper: str
```

- *Type:* str

---

##### `idcs_trim_string_value`<sup>Required</sup> <a name="idcs_trim_string_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue"></a>

```python
idcs_trim_string_value: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_validate_reference`<sup>Required</sup> <a name="idcs_validate_reference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference"></a>

```python
idcs_validate_reference: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idcs_value_persisted`<sup>Required</sup> <a name="idcs_value_persisted" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted"></a>

```python
idcs_value_persisted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a>

---

##### `multi_valued`<sup>Required</sup> <a name="multi_valued" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued"></a>

```python
multi_valued: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mutability`<sup>Required</sup> <a name="mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability"></a>

```python
mutability: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `reference_types`<sup>Required</sup> <a name="reference_types" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes"></a>

```python
reference_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required`<sup>Required</sup> <a name="required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `returned`<sup>Required</sup> <a name="returned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned"></a>

```python
returned: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uniqueness`<sup>Required</sup> <a name="uniqueness" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness"></a>

```python
uniqueness: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_resource_type_schema_attributes

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a>

---



