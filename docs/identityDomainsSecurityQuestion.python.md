# `identityDomainsSecurityQuestion` Submodule <a name="`identityDomainsSecurityQuestion` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSecurityQuestion <a name="IdentityDomainsSecurityQuestion" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question oci_identity_domains_security_question}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active: typing.Union[bool, IResolvable],
  idcs_endpoint: str,
  question_text: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]],
  schemas: typing.List[str],
  type: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  external_id: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]] = None,
  timeouts: IdentityDomainsSecurityQuestionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#active IdentityDomainsSecurityQuestion#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#idcs_endpoint IdentityDomainsSecurityQuestion#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.questionText">question_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]</code> | question_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#schemas IdentityDomainsSecurityQuestion#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#type IdentityDomainsSecurityQuestion#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attributes IdentityDomainsSecurityQuestion#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attribute_sets IdentityDomainsSecurityQuestion#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#authorization IdentityDomainsSecurityQuestion#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#external_id IdentityDomainsSecurityQuestion#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#ocid IdentityDomainsSecurityQuestion#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#resource_type_schema_version IdentityDomainsSecurityQuestion#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#active IdentityDomainsSecurityQuestion#active}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#idcs_endpoint IdentityDomainsSecurityQuestion#idcs_endpoint}.

---

##### `question_text`<sup>Required</sup> <a name="question_text" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.questionText"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]

question_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#question_text IdentityDomainsSecurityQuestion#question_text}

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#schemas IdentityDomainsSecurityQuestion#schemas}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#type IdentityDomainsSecurityQuestion#type}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attributes IdentityDomainsSecurityQuestion#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attribute_sets IdentityDomainsSecurityQuestion#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#authorization IdentityDomainsSecurityQuestion#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#external_id IdentityDomainsSecurityQuestion#external_id}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#ocid IdentityDomainsSecurityQuestion#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#resource_type_schema_version IdentityDomainsSecurityQuestion#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#tags IdentityDomainsSecurityQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#timeouts IdentityDomainsSecurityQuestion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putQuestionText">put_question_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_question_text` <a name="put_question_text" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putQuestionText"></a>

```python
def put_question_text(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putQuestionText.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#create IdentityDomainsSecurityQuestion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#delete IdentityDomainsSecurityQuestion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#update IdentityDomainsSecurityQuestion#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsSecurityQuestion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsSecurityQuestion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsSecurityQuestion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsSecurityQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSecurityQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList">IdentityDomainsSecurityQuestionIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList">IdentityDomainsSecurityQuestionIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList">IdentityDomainsSecurityQuestionMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.questionText">question_text</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList">IdentityDomainsSecurityQuestionQuestionTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList">IdentityDomainsSecurityQuestionTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference">IdentityDomainsSecurityQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.questionTextInput">question_text_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsSecurityQuestionIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList">IdentityDomainsSecurityQuestionIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsSecurityQuestionIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList">IdentityDomainsSecurityQuestionIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.meta"></a>

```python
meta: IdentityDomainsSecurityQuestionMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList">IdentityDomainsSecurityQuestionMetaList</a>

---

##### `question_text`<sup>Required</sup> <a name="question_text" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.questionText"></a>

```python
question_text: IdentityDomainsSecurityQuestionQuestionTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList">IdentityDomainsSecurityQuestionQuestionTextList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tags"></a>

```python
tags: IdentityDomainsSecurityQuestionTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList">IdentityDomainsSecurityQuestionTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.timeouts"></a>

```python
timeouts: IdentityDomainsSecurityQuestionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference">IdentityDomainsSecurityQuestionTimeoutsOutputReference</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `question_text_input`<sup>Optional</sup> <a name="question_text_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.questionTextInput"></a>

```python
question_text_input: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsSecurityQuestionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSecurityQuestionConfig <a name="IdentityDomainsSecurityQuestionConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active: typing.Union[bool, IResolvable],
  idcs_endpoint: str,
  question_text: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]],
  schemas: typing.List[str],
  type: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  external_id: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]] = None,
  timeouts: IdentityDomainsSecurityQuestionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#active IdentityDomainsSecurityQuestion#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#idcs_endpoint IdentityDomainsSecurityQuestion#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.questionText">question_text</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]</code> | question_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#schemas IdentityDomainsSecurityQuestion#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#type IdentityDomainsSecurityQuestion#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attributes IdentityDomainsSecurityQuestion#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attribute_sets IdentityDomainsSecurityQuestion#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#authorization IdentityDomainsSecurityQuestion#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#external_id IdentityDomainsSecurityQuestion#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#ocid IdentityDomainsSecurityQuestion#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#resource_type_schema_version IdentityDomainsSecurityQuestion#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#active IdentityDomainsSecurityQuestion#active}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#idcs_endpoint IdentityDomainsSecurityQuestion#idcs_endpoint}.

---

##### `question_text`<sup>Required</sup> <a name="question_text" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.questionText"></a>

```python
question_text: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]

question_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#question_text IdentityDomainsSecurityQuestion#question_text}

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#schemas IdentityDomainsSecurityQuestion#schemas}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#type IdentityDomainsSecurityQuestion#type}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attributes IdentityDomainsSecurityQuestion#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#attribute_sets IdentityDomainsSecurityQuestion#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#authorization IdentityDomainsSecurityQuestion#authorization}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#external_id IdentityDomainsSecurityQuestion#external_id}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#ocid IdentityDomainsSecurityQuestion#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#resource_type_schema_version IdentityDomainsSecurityQuestion#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#tags IdentityDomainsSecurityQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsSecurityQuestionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#timeouts IdentityDomainsSecurityQuestion#timeouts}

---

### IdentityDomainsSecurityQuestionIdcsCreatedBy <a name="IdentityDomainsSecurityQuestionIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedBy()
```


### IdentityDomainsSecurityQuestionIdcsLastModifiedBy <a name="IdentityDomainsSecurityQuestionIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedBy()
```


### IdentityDomainsSecurityQuestionMeta <a name="IdentityDomainsSecurityQuestionMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMeta()
```


### IdentityDomainsSecurityQuestionQuestionText <a name="IdentityDomainsSecurityQuestionQuestionText" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText(
  locale: str,
  value: str,
  default: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#locale IdentityDomainsSecurityQuestion#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#value IdentityDomainsSecurityQuestion#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#default IdentityDomainsSecurityQuestion#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#locale IdentityDomainsSecurityQuestion#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#value IdentityDomainsSecurityQuestion#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#default IdentityDomainsSecurityQuestion#default}.

---

### IdentityDomainsSecurityQuestionTags <a name="IdentityDomainsSecurityQuestionTags" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#key IdentityDomainsSecurityQuestion#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#value IdentityDomainsSecurityQuestion#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#key IdentityDomainsSecurityQuestion#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#value IdentityDomainsSecurityQuestion#value}.

---

### IdentityDomainsSecurityQuestionTimeouts <a name="IdentityDomainsSecurityQuestionTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#create IdentityDomainsSecurityQuestion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#delete IdentityDomainsSecurityQuestion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#update IdentityDomainsSecurityQuestion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#create IdentityDomainsSecurityQuestion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#delete IdentityDomainsSecurityQuestion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_security_question#update IdentityDomainsSecurityQuestion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSecurityQuestionIdcsCreatedByList <a name="IdentityDomainsSecurityQuestionIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference <a name="IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedBy">IdentityDomainsSecurityQuestionIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSecurityQuestionIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsCreatedBy">IdentityDomainsSecurityQuestionIdcsCreatedBy</a>

---


### IdentityDomainsSecurityQuestionIdcsLastModifiedByList <a name="IdentityDomainsSecurityQuestionIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference <a name="IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedBy">IdentityDomainsSecurityQuestionIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSecurityQuestionIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionIdcsLastModifiedBy">IdentityDomainsSecurityQuestionIdcsLastModifiedBy</a>

---


### IdentityDomainsSecurityQuestionMetaList <a name="IdentityDomainsSecurityQuestionMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSecurityQuestionMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsSecurityQuestionMetaOutputReference <a name="IdentityDomainsSecurityQuestionMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMeta">IdentityDomainsSecurityQuestionMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsSecurityQuestionMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionMeta">IdentityDomainsSecurityQuestionMeta</a>

---


### IdentityDomainsSecurityQuestionQuestionTextList <a name="IdentityDomainsSecurityQuestionQuestionTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSecurityQuestionQuestionTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionQuestionText]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]]

---


### IdentityDomainsSecurityQuestionQuestionTextOutputReference <a name="IdentityDomainsSecurityQuestionQuestionTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionTextOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSecurityQuestionQuestionText]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionQuestionText">IdentityDomainsSecurityQuestionQuestionText</a>]

---


### IdentityDomainsSecurityQuestionTagsList <a name="IdentityDomainsSecurityQuestionTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsSecurityQuestionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsSecurityQuestionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]]

---


### IdentityDomainsSecurityQuestionTagsOutputReference <a name="IdentityDomainsSecurityQuestionTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSecurityQuestionTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTags">IdentityDomainsSecurityQuestionTags</a>]

---


### IdentityDomainsSecurityQuestionTimeoutsOutputReference <a name="IdentityDomainsSecurityQuestionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_security_question

identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsSecurityQuestionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsSecurityQuestion.IdentityDomainsSecurityQuestionTimeouts">IdentityDomainsSecurityQuestionTimeouts</a>]

---



