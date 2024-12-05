# `dataOciIdentityDomainsSecurityQuestions` Submodule <a name="`dataOciIdentityDomainsSecurityQuestions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSecurityQuestions <a name="DataOciIdentityDomainsSecurityQuestions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions oci_identity_domains_security_questions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions(
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
  resource_type_schema_version: str = None,
  security_question_count: typing.Union[int, float] = None,
  security_question_filter: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.securityQuestionCount">security_question_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.securityQuestionFilter">security_question_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}.

---

##### `security_question_count`<sup>Optional</sup> <a name="security_question_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.securityQuestionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}.

---

##### `security_question_filter`<sup>Optional</sup> <a name="security_question_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.securityQuestionFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionCount">reset_security_question_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionFilter">reset_security_question_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_security_question_count` <a name="reset_security_question_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionCount"></a>

```python
def reset_security_question_count() -> None
```

##### `reset_security_question_filter` <a name="reset_security_question_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionFilter"></a>

```python
def reset_security_question_filter() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsSecurityQuestions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsSecurityQuestions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSecurityQuestions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestions">security_questions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCountInput">security_question_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilterInput">security_question_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCount">security_question_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilter">security_question_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_questions`<sup>Required</sup> <a name="security_questions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestions"></a>

```python
security_questions: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList</a>

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `security_question_count_input`<sup>Optional</sup> <a name="security_question_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCountInput"></a>

```python
security_question_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_question_filter_input`<sup>Optional</sup> <a name="security_question_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilterInput"></a>

```python
security_question_filter_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `security_question_count`<sup>Required</sup> <a name="security_question_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCount"></a>

```python
security_question_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_question_filter`<sup>Required</sup> <a name="security_question_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilter"></a>

```python
security_question_filter: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSecurityQuestionsConfig <a name="DataOciIdentityDomainsSecurityQuestionsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig(
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
  resource_type_schema_version: str = None,
  security_question_count: typing.Union[int, float] = None,
  security_question_filter: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionCount">security_question_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionFilter">security_question_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}.

---

##### `security_question_count`<sup>Optional</sup> <a name="security_question_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionCount"></a>

```python
security_question_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}.

---

##### `security_question_filter`<sup>Optional</sup> <a name="security_question_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionFilter"></a>

```python
security_question_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}.

---

### DataOciIdentityDomainsSecurityQuestionsSecurityQuestions <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions()
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy()
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta()
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText()
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.questionText">question_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions">DataOciIdentityDomainsSecurityQuestionsSecurityQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `question_text`<sup>Required</sup> <a name="question_text" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.questionText"></a>

```python
question_text: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList</a>

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions">DataOciIdentityDomainsSecurityQuestionsSecurityQuestions</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_security_questions

dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags</a>

---



