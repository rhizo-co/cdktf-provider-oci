# `opsiOpsiConfiguration` Submodule <a name="`opsiOpsiConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOpsiConfiguration <a name="OpsiOpsiConfiguration" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration oci_opsi_opsi_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfiguration;

OpsiOpsiConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .opsiConfigType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .configItemCustomStatus(java.util.List<java.lang.String>)
//  .configItemField(java.util.List<java.lang.String>)
//  .configItems(IResolvable)
//  .configItems(java.util.List<OpsiOpsiConfigurationConfigItems>)
//  .configItemsApplicableContext(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .opsiConfigField(java.util.List<java.lang.String>)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpsiOpsiConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItems">configItems</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>></code> | config_items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}.

---

##### `configItemCustomStatus`<sup>Optional</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}.

---

##### `configItemField`<sup>Optional</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}.

---

##### `configItems`<sup>Optional</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItems"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>>

config_items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}

---

##### `configItemsApplicableContext`<sup>Optional</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsiConfigField`<sup>Optional</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.opsiConfigField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.systemTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems">putConfigItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus">resetConfigItemCustomStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField">resetConfigItemField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems">resetConfigItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext">resetConfigItemsApplicableContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField">resetOpsiConfigField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigItems` <a name="putConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems"></a>

```java
public void putConfigItems(IResolvable OR java.util.List<OpsiOpsiConfigurationConfigItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts"></a>

```java
public void putTimeouts(OpsiOpsiConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetConfigItemCustomStatus` <a name="resetConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus"></a>

```java
public void resetConfigItemCustomStatus()
```

##### `resetConfigItemField` <a name="resetConfigItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField"></a>

```java
public void resetConfigItemField()
```

##### `resetConfigItems` <a name="resetConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems"></a>

```java
public void resetConfigItems()
```

##### `resetConfigItemsApplicableContext` <a name="resetConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext"></a>

```java
public void resetConfigItemsApplicableContext()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetOpsiConfigField` <a name="resetOpsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField"></a>

```java
public void resetOpsiConfigField()
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags"></a>

```java
public void resetSystemTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfiguration;

OpsiOpsiConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfiguration;

OpsiOpsiConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfiguration;

OpsiOpsiConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfiguration;

OpsiOpsiConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsiOpsiConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsiOpsiConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsiOpsiConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOpsiConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems">configItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput">configItemCustomStatusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput">configItemFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput">configItemsApplicableContextInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput">configItemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput">opsiConfigFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput">opsiConfigTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput">systemTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configItems`<sup>Required</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems"></a>

```java
public OpsiOpsiConfigurationConfigItemsList getConfigItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts"></a>

```java
public OpsiOpsiConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configItemCustomStatusInput`<sup>Optional</sup> <a name="configItemCustomStatusInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemFieldInput`<sup>Optional</sup> <a name="configItemFieldInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContextInput`<sup>Optional</sup> <a name="configItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsInput`<sup>Optional</sup> <a name="configItemsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput"></a>

```java
public java.lang.Object getConfigItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `opsiConfigFieldInput`<sup>Optional</sup> <a name="opsiConfigFieldInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigTypeInput`<sup>Optional</sup> <a name="opsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput"></a>

```java
public java.lang.String getOpsiConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configItemCustomStatus`<sup>Required</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `opsiConfigField`<sup>Required</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType"></a>

```java
public java.lang.String getOpsiConfigType();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOpsiConfigurationConfig <a name="OpsiOpsiConfigurationConfig" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfig;

OpsiOpsiConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .opsiConfigType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .configItemCustomStatus(java.util.List<java.lang.String>)
//  .configItemField(java.util.List<java.lang.String>)
//  .configItems(IResolvable)
//  .configItems(java.util.List<OpsiOpsiConfigurationConfigItems>)
//  .configItemsApplicableContext(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .opsiConfigField(java.util.List<java.lang.String>)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpsiOpsiConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems">configItems</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>></code> | config_items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType"></a>

```java
public java.lang.String getOpsiConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}.

---

##### `configItemCustomStatus`<sup>Optional</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}.

---

##### `configItemField`<sup>Optional</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}.

---

##### `configItems`<sup>Optional</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems"></a>

```java
public java.lang.Object getConfigItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>>

config_items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}

---

##### `configItemsApplicableContext`<sup>Optional</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsiConfigField`<sup>Optional</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts"></a>

```java
public OpsiOpsiConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}

---

### OpsiOpsiConfigurationConfigItems <a name="OpsiOpsiConfigurationConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItems;

OpsiOpsiConfigurationConfigItems.builder()
    .configItemType(java.lang.String)
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}. |

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}.

---

### OpsiOpsiConfigurationConfigItemsMetadata <a name="OpsiOpsiConfigurationConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadata;

OpsiOpsiConfigurationConfigItemsMetadata.builder()
    .build();
```


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails;

OpsiOpsiConfigurationConfigItemsMetadataUnitDetails.builder()
    .build();
```


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails;

OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.builder()
    .build();
```


### OpsiOpsiConfigurationTimeouts <a name="OpsiOpsiConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationTimeouts;

OpsiOpsiConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOpsiConfigurationConfigItemsList <a name="OpsiOpsiConfigurationConfigItemsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsList;

new OpsiOpsiConfigurationConfigItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get"></a>

```java
public OpsiOpsiConfigurationConfigItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>>

---


### OpsiOpsiConfigurationConfigItemsMetadataList <a name="OpsiOpsiConfigurationConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataList;

new OpsiOpsiConfigurationConfigItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpsiOpsiConfigurationConfigItemsMetadataOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference;

new OpsiOpsiConfigurationConfigItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails">unitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails">valueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unitDetails`<sup>Required</sup> <a name="unitDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList getUnitDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a>

---

##### `valueInputDetails`<sup>Required</sup> <a name="valueInputDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList getValueInputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList;

new OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference;

new OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataUnitDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList;

new OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference;

new OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowedValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValueType`<sup>Required</sup> <a name="allowedValueType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```java
public java.lang.String getAllowedValueType();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a>

---


### OpsiOpsiConfigurationConfigItemsOutputReference <a name="OpsiOpsiConfigurationConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationConfigItemsOutputReference;

new OpsiOpsiConfigurationConfigItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts">applicableContexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput">configItemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicableContexts`<sup>Required</sup> <a name="applicableContexts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts"></a>

```java
public java.util.List<java.lang.String> getApplicableContexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata"></a>

```java
public OpsiOpsiConfigurationConfigItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a>

---

##### `configItemTypeInput`<sup>Optional</sup> <a name="configItemTypeInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput"></a>

```java
public java.lang.String getConfigItemTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems">OpsiOpsiConfigurationConfigItems</a>

---


### OpsiOpsiConfigurationTimeoutsOutputReference <a name="OpsiOpsiConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_opsi_configuration.OpsiOpsiConfigurationTimeoutsOutputReference;

new OpsiOpsiConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

---



