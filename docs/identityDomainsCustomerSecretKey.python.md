# `identityDomainsCustomerSecretKey` Submodule <a name="`identityDomainsCustomerSecretKey` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsCustomerSecretKey <a name="IdentityDomainsCustomerSecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key oci_identity_domains_customer_secret_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey(
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
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]] = None,
  timeouts: IdentityDomainsCustomerSecretKeyTimeouts = None,
  urnietfparamsscimschemasoracleidcsextensionself_change_user: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser = None,
  user: IdentityDomainsCustomerSecretKeyUser = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | urnietfparamsscimschemasoracleidcsextensionself_change_user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.expiresOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#tags IdentityDomainsCustomerSecretKey#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#timeouts IdentityDomainsCustomerSecretKey#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

urnietfparamsscimschemasoracleidcsextensionself_change_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsCustomerSecretKey#urnietfparamsscimschemasoracleidcsextensionself_change_user}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.Initializer.parameter.user"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#user IdentityDomainsCustomerSecretKey#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">put_urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser">put_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetExpiresOn">reset_expires_on</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">reset_urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}.

---

##### `put_urnietfparamsscimschemasoracleidcsextensionself_change_user` <a name="put_urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextensionself_change_user(
  allow_self_change: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_self_change`<sup>Optional</sup> <a name="allow_self_change" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.parameter.allowSelfChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}.

---

##### `put_user` <a name="put_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser"></a>

```python
def put_user(
  ocid: str = None,
  value: str = None
) -> None
```

###### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.putUser.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}.

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_expires_on` <a name="reset_expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetExpiresOn"></a>

```python
def reset_expires_on() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextensionself_change_user` <a name="reset_urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextensionself_change_user() -> None
```

##### `reset_user` <a name="reset_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsCustomerSecretKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsCustomerSecretKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsCustomerSecretKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsCustomerSecretKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsCustomerSecretKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList">IdentityDomainsCustomerSecretKeyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList">IdentityDomainsCustomerSecretKeyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList">IdentityDomainsCustomerSecretKeyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsCustomerSecretKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference">IdentityDomainsCustomerSecretKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOnInput">expires_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput">urnietfparamsscimschemasoracleidcsextensionself_change_user_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.userInput">user_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsCustomerSecretKeyIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList">IdentityDomainsCustomerSecretKeyIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.meta"></a>

```python
meta: IdentityDomainsCustomerSecretKeyMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList">IdentityDomainsCustomerSecretKeyMetaList</a>

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tags"></a>

```python
tags: IdentityDomainsCustomerSecretKeyTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList">IdentityDomainsCustomerSecretKeyTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeouts"></a>

```python
timeouts: IdentityDomainsCustomerSecretKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsCustomerSecretKeyTimeoutsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
urnietfparamsscimschemasoracleidcsextensionself_change_user: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.user"></a>

```python
user: IdentityDomainsCustomerSecretKeyUserOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference">IdentityDomainsCustomerSecretKeyUserOutputReference</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `expires_on_input`<sup>Optional</sup> <a name="expires_on_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOnInput"></a>

```python
expires_on_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsCustomerSecretKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>]

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput"></a>

```python
urnietfparamsscimschemasoracleidcsextensionself_change_user_input: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.userInput"></a>

```python
user_input: IdentityDomainsCustomerSecretKeyUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsCustomerSecretKeyConfig <a name="IdentityDomainsCustomerSecretKeyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]] = None,
  timeouts: IdentityDomainsCustomerSecretKeyTimeouts = None,
  urnietfparamsscimschemasoracleidcsextensionself_change_user: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser = None,
  user: IdentityDomainsCustomerSecretKeyUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionself_change_user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | urnietfparamsscimschemasoracleidcsextensionself_change_user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#idcs_endpoint IdentityDomainsCustomerSecretKey#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#schemas IdentityDomainsCustomerSecretKey#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attributes IdentityDomainsCustomerSecretKey#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#attribute_sets IdentityDomainsCustomerSecretKey#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#authorization IdentityDomainsCustomerSecretKey#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#description IdentityDomainsCustomerSecretKey#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#display_name IdentityDomainsCustomerSecretKey#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#expires_on IdentityDomainsCustomerSecretKey#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#resource_type_schema_version IdentityDomainsCustomerSecretKey#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#status IdentityDomainsCustomerSecretKey#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#tags IdentityDomainsCustomerSecretKey#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsCustomerSecretKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#timeouts IdentityDomainsCustomerSecretKey#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionself_change_user`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionself_change_user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```python
urnietfparamsscimschemasoracleidcsextensionself_change_user: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

urnietfparamsscimschemasoracleidcsextensionself_change_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsCustomerSecretKey#urnietfparamsscimschemasoracleidcsextensionself_change_user}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyConfig.property.user"></a>

```python
user: IdentityDomainsCustomerSecretKeyUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#user IdentityDomainsCustomerSecretKey#user}

---

### IdentityDomainsCustomerSecretKeyIdcsCreatedBy <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy()
```


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy()
```


### IdentityDomainsCustomerSecretKeyMeta <a name="IdentityDomainsCustomerSecretKeyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta()
```


### IdentityDomainsCustomerSecretKeyTags <a name="IdentityDomainsCustomerSecretKeyTags" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#key IdentityDomainsCustomerSecretKey#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#key IdentityDomainsCustomerSecretKey#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}.

---

### IdentityDomainsCustomerSecretKeyTimeouts <a name="IdentityDomainsCustomerSecretKeyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#create IdentityDomainsCustomerSecretKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#delete IdentityDomainsCustomerSecretKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#update IdentityDomainsCustomerSecretKey#update}.

---

### IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(
  allow_self_change: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange">allow_self_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}. |

---

##### `allow_self_change`<sup>Optional</sup> <a name="allow_self_change" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange"></a>

```python
allow_self_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#allow_self_change IdentityDomainsCustomerSecretKey#allow_self_change}.

---

### IdentityDomainsCustomerSecretKeyUser <a name="IdentityDomainsCustomerSecretKeyUser" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser(
  ocid: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}. |

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#ocid IdentityDomainsCustomerSecretKey#ocid}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_customer_secret_key#value IdentityDomainsCustomerSecretKey#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsCustomerSecretKeyIdcsCreatedByList <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference <a name="IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy">IdentityDomainsCustomerSecretKeyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCustomerSecretKeyIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsCreatedBy">IdentityDomainsCustomerSecretKeyIdcsCreatedBy</a>

---


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference <a name="IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsCustomerSecretKeyIdcsLastModifiedBy</a>

---


### IdentityDomainsCustomerSecretKeyMetaList <a name="IdentityDomainsCustomerSecretKeyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCustomerSecretKeyMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsCustomerSecretKeyMetaOutputReference <a name="IdentityDomainsCustomerSecretKeyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta">IdentityDomainsCustomerSecretKeyMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCustomerSecretKeyMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyMeta">IdentityDomainsCustomerSecretKeyMeta</a>

---


### IdentityDomainsCustomerSecretKeyTagsList <a name="IdentityDomainsCustomerSecretKeyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsCustomerSecretKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsCustomerSecretKeyTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]]

---


### IdentityDomainsCustomerSecretKeyTagsOutputReference <a name="IdentityDomainsCustomerSecretKeyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsCustomerSecretKeyTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTags">IdentityDomainsCustomerSecretKeyTags</a>]

---


### IdentityDomainsCustomerSecretKeyTimeoutsOutputReference <a name="IdentityDomainsCustomerSecretKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsCustomerSecretKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyTimeouts">IdentityDomainsCustomerSecretKeyTimeouts</a>]

---


### IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange">reset_allow_self_change</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_self_change` <a name="reset_allow_self_change" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange"></a>

```python
def reset_allow_self_change() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput">allow_self_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allow_self_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_self_change_input`<sup>Optional</sup> <a name="allow_self_change_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput"></a>

```python
allow_self_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_self_change`<sup>Required</sup> <a name="allow_self_change" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```python
allow_self_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### IdentityDomainsCustomerSecretKeyUserOutputReference <a name="IdentityDomainsCustomerSecretKeyUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_customer_secret_key

identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUserOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsCustomerSecretKeyUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCustomerSecretKey.IdentityDomainsCustomerSecretKeyUser">IdentityDomainsCustomerSecretKeyUser</a>

---



