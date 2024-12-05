# `identityDomainsDynamicResourceGroup` Submodule <a name="`identityDomainsDynamicResourceGroup` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsDynamicResourceGroup <a name="IdentityDomainsDynamicResourceGroup" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group oci_identity_domains_dynamic_resource_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idcs_endpoint: str,
  matching_rule: str,
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]] = None,
  timeouts: IdentityDomainsDynamicResourceGroupTimeouts = None,
  urnietfparamsscimschemasoracleidcsextension_oci_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.matchingRule">matching_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | urnietfparamsscimschemasoracleidcsextension_oci_tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}.

---

##### `matching_rule`<sup>Required</sup> <a name="matching_rule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.matchingRule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.schemas"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.ocid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#tags IdentityDomainsDynamicResourceGroup#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#timeouts IdentityDomainsDynamicResourceGroup#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextension_oci_tags`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.Initializer.parameter.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

urnietfparamsscimschemasoracleidcsextension_oci_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#urnietfparamsscimschemasoracleidcsextension_oci_tags IdentityDomainsDynamicResourceGroup#urnietfparamsscimschemasoracleidcsextension_oci_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags">put_urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOcid">reset_ocid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetUrnietfparamsscimschemasoracleidcsextensionOciTags">reset_urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#create IdentityDomainsDynamicResourceGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#delete IdentityDomainsDynamicResourceGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#update IdentityDomainsDynamicResourceGroup#update}.

---

##### `put_urnietfparamsscimschemasoracleidcsextension_oci_tags` <a name="put_urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```python
def put_urnietfparamsscimschemasoracleidcsextension_oci_tags(
  defined_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]] = None,
  freeform_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]] = None
) -> None
```

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags.parameter.definedTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]

defined_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#defined_tags IdentityDomainsDynamicResourceGroup#defined_tags}

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.putUrnietfparamsscimschemasoracleidcsextensionOciTags.parameter.freeformTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]

freeform_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#freeform_tags IdentityDomainsDynamicResourceGroup#freeform_tags}

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ocid` <a name="reset_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetOcid"></a>

```python
def reset_ocid() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_urnietfparamsscimschemasoracleidcsextension_oci_tags` <a name="reset_urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.resetUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```python
def reset_urnietfparamsscimschemasoracleidcsextension_oci_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityDomainsDynamicResourceGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityDomainsDynamicResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsDynamicResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles">dynamic_group_app_roles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList">IdentityDomainsDynamicResourceGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList">IdentityDomainsDynamicResourceGroupIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList">IdentityDomainsDynamicResourceGroupMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList">IdentityDomainsDynamicResourceGroupTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference">IdentityDomainsDynamicResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRuleInput">matching_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocidInput">ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTagsInput">urnietfparamsscimschemasoracleidcsextension_oci_tags_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRule">matching_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `dynamic_group_app_roles`<sup>Required</sup> <a name="dynamic_group_app_roles" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles"></a>

```python
dynamic_group_app_roles: IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.grants"></a>

```python
grants: IdentityDomainsDynamicResourceGroupGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList">IdentityDomainsDynamicResourceGroupGrantsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsCreatedBy"></a>

```python
idcs_created_by: IdentityDomainsDynamicResourceGroupIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList">IdentityDomainsDynamicResourceGroupIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.meta"></a>

```python
meta: IdentityDomainsDynamicResourceGroupMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList">IdentityDomainsDynamicResourceGroupMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tags"></a>

```python
tags: IdentityDomainsDynamicResourceGroupTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList">IdentityDomainsDynamicResourceGroupTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeouts"></a>

```python
timeouts: IdentityDomainsDynamicResourceGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference">IdentityDomainsDynamicResourceGroupTimeoutsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextension_oci_tags`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```python
urnietfparamsscimschemasoracleidcsextension_oci_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference</a>

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `matching_rule_input`<sup>Optional</sup> <a name="matching_rule_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRuleInput"></a>

```python
matching_rule_input: str
```

- *Type:* str

---

##### `ocid_input`<sup>Optional</sup> <a name="ocid_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocidInput"></a>

```python
ocid_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityDomainsDynamicResourceGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>]

---

##### `urnietfparamsscimschemasoracleidcsextension_oci_tags_input`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextension_oci_tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTagsInput"></a>

```python
urnietfparamsscimschemasoracleidcsextension_oci_tags_input: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `matching_rule`<sup>Required</sup> <a name="matching_rule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.matchingRule"></a>

```python
matching_rule: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsDynamicResourceGroupConfig <a name="IdentityDomainsDynamicResourceGroupConfig" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  idcs_endpoint: str,
  matching_rule: str,
  schemas: typing.List[str],
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  description: str = None,
  ocid: str = None,
  resource_type_schema_version: str = None,
  tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]] = None,
  timeouts: IdentityDomainsDynamicResourceGroupTimeouts = None,
  urnietfparamsscimschemasoracleidcsextension_oci_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.matchingRule">matching_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.ocid">ocid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextension_oci_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | urnietfparamsscimschemasoracleidcsextension_oci_tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#display_name IdentityDomainsDynamicResourceGroup#display_name}.

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#idcs_endpoint IdentityDomainsDynamicResourceGroup#idcs_endpoint}.

---

##### `matching_rule`<sup>Required</sup> <a name="matching_rule" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.matchingRule"></a>

```python
matching_rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#matching_rule IdentityDomainsDynamicResourceGroup#matching_rule}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#schemas IdentityDomainsDynamicResourceGroup#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attributes IdentityDomainsDynamicResourceGroup#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#attribute_sets IdentityDomainsDynamicResourceGroup#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#authorization IdentityDomainsDynamicResourceGroup#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#description IdentityDomainsDynamicResourceGroup#description}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#ocid IdentityDomainsDynamicResourceGroup#ocid}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#resource_type_schema_version IdentityDomainsDynamicResourceGroup#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#tags IdentityDomainsDynamicResourceGroup#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.timeouts"></a>

```python
timeouts: IdentityDomainsDynamicResourceGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#timeouts IdentityDomainsDynamicResourceGroup#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextension_oci_tags`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextension_oci_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupConfig.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```python
urnietfparamsscimschemasoracleidcsextension_oci_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

urnietfparamsscimschemasoracleidcsextension_oci_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#urnietfparamsscimschemasoracleidcsextension_oci_tags IdentityDomainsDynamicResourceGroup#urnietfparamsscimschemasoracleidcsextension_oci_tags}

---

### IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles()
```


### IdentityDomainsDynamicResourceGroupGrants <a name="IdentityDomainsDynamicResourceGroupGrants" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants()
```


### IdentityDomainsDynamicResourceGroupIdcsCreatedBy <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy()
```


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy()
```


### IdentityDomainsDynamicResourceGroupMeta <a name="IdentityDomainsDynamicResourceGroupMeta" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta()
```


### IdentityDomainsDynamicResourceGroupTags <a name="IdentityDomainsDynamicResourceGroupTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

### IdentityDomainsDynamicResourceGroupTimeouts <a name="IdentityDomainsDynamicResourceGroupTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#create IdentityDomainsDynamicResourceGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#delete IdentityDomainsDynamicResourceGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#update IdentityDomainsDynamicResourceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#create IdentityDomainsDynamicResourceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#delete IdentityDomainsDynamicResourceGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#update IdentityDomainsDynamicResourceGroup#update}.

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags(
  defined_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]] = None,
  freeform_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.definedTags">defined_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]</code> | defined_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.freeformTags">freeform_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]</code> | freeform_tags block. |

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.definedTags"></a>

```python
defined_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]

defined_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#defined_tags IdentityDomainsDynamicResourceGroup#defined_tags}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.property.freeformTags"></a>

```python
freeform_tags: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]

freeform_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#freeform_tags IdentityDomainsDynamicResourceGroup#freeform_tags}

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags(
  key: str,
  namespace: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#namespace IdentityDomainsDynamicResourceGroup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#namespace IdentityDomainsDynamicResourceGroup#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#key IdentityDomainsDynamicResourceGroup#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_dynamic_resource_group#value IdentityDomainsDynamicResourceGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference <a name="IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole">admin_role</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName">legacy_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_role`<sup>Required</sup> <a name="admin_role" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```python
admin_role: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `legacy_group_name`<sup>Required</sup> <a name="legacy_group_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```python
legacy_group_name: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">IdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a>

---


### IdentityDomainsDynamicResourceGroupGrantsList <a name="IdentityDomainsDynamicResourceGroupGrantsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsDynamicResourceGroupGrantsOutputReference <a name="IdentityDomainsDynamicResourceGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism">grant_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants">IdentityDomainsDynamicResourceGroupGrants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `grant_mechanism`<sup>Required</sup> <a name="grant_mechanism" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism"></a>

```python
grant_mechanism: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupGrants">IdentityDomainsDynamicResourceGroupGrants</a>

---


### IdentityDomainsDynamicResourceGroupIdcsCreatedByList <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference <a name="IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy">IdentityDomainsDynamicResourceGroupIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsCreatedBy">IdentityDomainsDynamicResourceGroupIdcsCreatedBy</a>

---


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference <a name="IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">IdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a>

---


### IdentityDomainsDynamicResourceGroupMetaList <a name="IdentityDomainsDynamicResourceGroupMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentityDomainsDynamicResourceGroupMetaOutputReference <a name="IdentityDomainsDynamicResourceGroupMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta">IdentityDomainsDynamicResourceGroupMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupMeta">IdentityDomainsDynamicResourceGroupMeta</a>

---


### IdentityDomainsDynamicResourceGroupTagsList <a name="IdentityDomainsDynamicResourceGroupTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]]

---


### IdentityDomainsDynamicResourceGroupTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsDynamicResourceGroupTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTags">IdentityDomainsDynamicResourceGroupTags</a>]

---


### IdentityDomainsDynamicResourceGroupTimeoutsOutputReference <a name="IdentityDomainsDynamicResourceGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsDynamicResourceGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupTimeouts">IdentityDomainsDynamicResourceGroupTimeouts</a>]

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]

---


### IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_domains_dynamic_resource_group

identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags">put_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags">put_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_defined_tags` <a name="put_defined_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags"></a>

```python
def put_defined_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putDefinedTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]

---

##### `put_freeform_tags` <a name="put_freeform_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags"></a>

```python
def put_freeform_tags(
  value: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.putFreeformTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">defined_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">freeform_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">tag_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```python
defined_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```python
freeform_tags: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `tag_slug`<sup>Required</sup> <a name="tag_slug" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```python
tag_slug: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Union[IResolvable, typing.List[IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```python
internal_value: IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsDynamicResourceGroup.IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">IdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---



