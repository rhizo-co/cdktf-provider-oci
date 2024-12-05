# `dataOciIdentityDomainsNetworkPerimeters` Submodule <a name="`dataOciIdentityDomainsNetworkPerimeters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters oci_identity_domains_network_perimeters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters(
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
  network_perimeter_count: typing.Union[int, float] = None,
  network_perimeter_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterCount">network_perimeter_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterFilter">network_perimeter_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_perimeter_count`<sup>Optional</sup> <a name="network_perimeter_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}.

---

##### `network_perimeter_filter`<sup>Optional</sup> <a name="network_perimeter_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount">reset_network_perimeter_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter">reset_network_perimeter_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_perimeter_count` <a name="reset_network_perimeter_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount"></a>

```python
def reset_network_perimeter_count() -> None
```

##### `reset_network_perimeter_filter` <a name="reset_network_perimeter_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter"></a>

```python
def reset_network_perimeter_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsNetworkPerimeters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsNetworkPerimeters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsNetworkPerimeters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters">network_perimeters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput">network_perimeter_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput">network_perimeter_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount">network_perimeter_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter">network_perimeter_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_perimeters`<sup>Required</sup> <a name="network_perimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters"></a>

```python
network_perimeters: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_perimeter_count_input`<sup>Optional</sup> <a name="network_perimeter_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput"></a>

```python
network_perimeter_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_perimeter_filter_input`<sup>Optional</sup> <a name="network_perimeter_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput"></a>

```python
network_perimeter_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `network_perimeter_count`<sup>Required</sup> <a name="network_perimeter_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount"></a>

```python
network_perimeter_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_perimeter_filter`<sup>Required</sup> <a name="network_perimeter_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter"></a>

```python
network_perimeter_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsNetworkPerimetersConfig <a name="DataOciIdentityDomainsNetworkPerimetersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig(
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
  network_perimeter_count: typing.Union[int, float] = None,
  network_perimeter_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount">network_perimeter_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter">network_perimeter_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_perimeter_count`<sup>Optional</sup> <a name="network_perimeter_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount"></a>

```python
network_perimeter_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}.

---

##### `network_perimeter_filter`<sup>Optional</sup> <a name="network_perimeter_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter"></a>

```python
network_perimeter_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}.

---

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters()
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy()
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy()
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses()
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta()
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses">ip_addresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses"></a>

```python
ip_addresses: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_network_perimeters

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a>

---



