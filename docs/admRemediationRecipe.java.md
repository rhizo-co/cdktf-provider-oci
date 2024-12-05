# `admRemediationRecipe` Submodule <a name="`admRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.admRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdmRemediationRecipe <a name="AdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipe;

AdmRemediationRecipe.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .detectConfiguration(AdmRemediationRecipeDetectConfiguration)
    .isRunTriggeredOnKbChange(java.lang.Boolean)
    .isRunTriggeredOnKbChange(IResolvable)
    .knowledgeBaseId(java.lang.String)
    .networkConfiguration(AdmRemediationRecipeNetworkConfiguration)
    .scmConfiguration(AdmRemediationRecipeScmConfiguration)
    .verifyConfiguration(AdmRemediationRecipeVerifyConfiguration)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(AdmRemediationRecipeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.detectConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.isRunTriggeredOnKbChange"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scmConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.verifyConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration">putDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration">putScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration">putVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectConfiguration` <a name="putDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration"></a>

```java
public void putDetectConfiguration(AdmRemediationRecipeDetectConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(AdmRemediationRecipeNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `putScmConfiguration` <a name="putScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration"></a>

```java
public void putScmConfiguration(AdmRemediationRecipeScmConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts"></a>

```java
public void putTimeouts(AdmRemediationRecipeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `putVerifyConfiguration` <a name="putVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration"></a>

```java
public void putVerifyConfiguration(AdmRemediationRecipeVerifyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipe;

AdmRemediationRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipe;

AdmRemediationRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipe;

AdmRemediationRecipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipe;

AdmRemediationRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AdmRemediationRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AdmRemediationRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput">detectConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput">isRunTriggeredOnKbChangeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput">scmConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput">verifyConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration"></a>

```java
public AdmRemediationRecipeDetectConfigurationOutputReference getDetectConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration"></a>

```java
public AdmRemediationRecipeNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a>

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration"></a>

```java
public AdmRemediationRecipeScmConfigurationOutputReference getScmConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts"></a>

```java
public AdmRemediationRecipeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration"></a>

```java
public AdmRemediationRecipeVerifyConfigurationOutputReference getVerifyConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `detectConfigurationInput`<sup>Optional</sup> <a name="detectConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput"></a>

```java
public AdmRemediationRecipeDetectConfiguration getDetectConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isRunTriggeredOnKbChangeInput`<sup>Optional</sup> <a name="isRunTriggeredOnKbChangeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput"></a>

```java
public java.lang.Object getIsRunTriggeredOnKbChangeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput"></a>

```java
public java.lang.String getKnowledgeBaseIdInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput"></a>

```java
public AdmRemediationRecipeNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `scmConfigurationInput`<sup>Optional</sup> <a name="scmConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput"></a>

```java
public AdmRemediationRecipeScmConfiguration getScmConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `verifyConfigurationInput`<sup>Optional</sup> <a name="verifyConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput"></a>

```java
public AdmRemediationRecipeVerifyConfiguration getVerifyConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```java
public java.lang.Object getIsRunTriggeredOnKbChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdmRemediationRecipeConfig <a name="AdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeConfig;

AdmRemediationRecipeConfig.builder()
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
    .compartmentId(java.lang.String)
    .detectConfiguration(AdmRemediationRecipeDetectConfiguration)
    .isRunTriggeredOnKbChange(java.lang.Boolean)
    .isRunTriggeredOnKbChange(IResolvable)
    .knowledgeBaseId(java.lang.String)
    .networkConfiguration(AdmRemediationRecipeNetworkConfiguration)
    .scmConfiguration(AdmRemediationRecipeScmConfiguration)
    .verifyConfiguration(AdmRemediationRecipeVerifyConfiguration)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(AdmRemediationRecipeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration">detectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange">isRunTriggeredOnKbChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration">scmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration">verifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `detectConfiguration`<sup>Required</sup> <a name="detectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration"></a>

```java
public AdmRemediationRecipeDetectConfiguration getDetectConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `isRunTriggeredOnKbChange`<sup>Required</sup> <a name="isRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange"></a>

```java
public java.lang.Object getIsRunTriggeredOnKbChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration"></a>

```java
public AdmRemediationRecipeNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `scmConfiguration`<sup>Required</sup> <a name="scmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration"></a>

```java
public AdmRemediationRecipeScmConfiguration getScmConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `verifyConfiguration`<sup>Required</sup> <a name="verifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration"></a>

```java
public AdmRemediationRecipeVerifyConfiguration getVerifyConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts"></a>

```java
public AdmRemediationRecipeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

### AdmRemediationRecipeDetectConfiguration <a name="AdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeDetectConfiguration;

AdmRemediationRecipeDetectConfiguration.builder()
//  .exclusions(java.util.List<java.lang.String>)
//  .maxPermissibleCvssV2Score(java.lang.Number)
//  .maxPermissibleCvssV3Score(java.lang.Number)
//  .maxPermissibleSeverity(java.lang.String)
//  .upgradePolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score">maxPermissibleCvssV2Score</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score">maxPermissibleCvssV3Score</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity">maxPermissibleSeverity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy">upgradePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

##### `maxPermissibleCvssV2Score`<sup>Optional</sup> <a name="maxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV2Score();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

##### `maxPermissibleCvssV3Score`<sup>Optional</sup> <a name="maxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV3Score();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

##### `maxPermissibleSeverity`<sup>Optional</sup> <a name="maxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity"></a>

```java
public java.lang.String getMaxPermissibleSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy"></a>

```java
public java.lang.String getUpgradePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

### AdmRemediationRecipeNetworkConfiguration <a name="AdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeNetworkConfiguration;

AdmRemediationRecipeNetworkConfiguration.builder()
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

### AdmRemediationRecipeScmConfiguration <a name="AdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeScmConfiguration;

AdmRemediationRecipeScmConfiguration.builder()
    .branch(java.lang.String)
    .isAutomergeEnabled(java.lang.Boolean)
    .isAutomergeEnabled(IResolvable)
    .scmType(java.lang.String)
//  .buildFileLocation(java.lang.String)
//  .externalScmType(java.lang.String)
//  .ociCodeRepositoryId(java.lang.String)
//  .patSecretId(java.lang.String)
//  .repositoryUrl(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled">isAutomergeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType">scmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation">buildFileLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType">externalScmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId">ociCodeRepositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

##### `isAutomergeEnabled`<sup>Required</sup> <a name="isAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled"></a>

```java
public java.lang.Object getIsAutomergeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

##### `buildFileLocation`<sup>Optional</sup> <a name="buildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation"></a>

```java
public java.lang.String getBuildFileLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

##### `externalScmType`<sup>Optional</sup> <a name="externalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType"></a>

```java
public java.lang.String getExternalScmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

##### `ociCodeRepositoryId`<sup>Optional</sup> <a name="ociCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId"></a>

```java
public java.lang.String getOciCodeRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

##### `patSecretId`<sup>Optional</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

### AdmRemediationRecipeTimeouts <a name="AdmRemediationRecipeTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeTimeouts;

AdmRemediationRecipeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

### AdmRemediationRecipeVerifyConfiguration <a name="AdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeVerifyConfiguration;

AdmRemediationRecipeVerifyConfiguration.builder()
    .buildServiceType(java.lang.String)
//  .additionalParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .jenkinsUrl(java.lang.String)
//  .jobName(java.lang.String)
//  .patSecretId(java.lang.String)
//  .pipelineId(java.lang.String)
//  .repositoryUrl(java.lang.String)
//  .triggerSecretId(java.lang.String)
//  .username(java.lang.String)
//  .workflowName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType">buildServiceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters">additionalParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName">jobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId">triggerSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}. |

---

##### `buildServiceType`<sup>Required</sup> <a name="buildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType"></a>

```java
public java.lang.String getBuildServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

##### `jenkinsUrl`<sup>Optional</sup> <a name="jenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl"></a>

```java
public java.lang.String getJenkinsUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

##### `patSecretId`<sup>Optional</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `triggerSecretId`<sup>Optional</sup> <a name="triggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId"></a>

```java
public java.lang.String getTriggerSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdmRemediationRecipeDetectConfigurationOutputReference <a name="AdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeDetectConfigurationOutputReference;

new AdmRemediationRecipeDetectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score">resetMaxPermissibleCvssV2Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score">resetMaxPermissibleCvssV3Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity">resetMaxPermissibleSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetMaxPermissibleCvssV2Score` <a name="resetMaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score"></a>

```java
public void resetMaxPermissibleCvssV2Score()
```

##### `resetMaxPermissibleCvssV3Score` <a name="resetMaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score"></a>

```java
public void resetMaxPermissibleCvssV3Score()
```

##### `resetMaxPermissibleSeverity` <a name="resetMaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity"></a>

```java
public void resetMaxPermissibleSeverity()
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy"></a>

```java
public void resetUpgradePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput">maxPermissibleCvssV2ScoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput">maxPermissibleCvssV3ScoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput">maxPermissibleSeverityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">maxPermissibleCvssV2Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">maxPermissibleCvssV3Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">maxPermissibleSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">upgradePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPermissibleCvssV2ScoreInput`<sup>Optional</sup> <a name="maxPermissibleCvssV2ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput"></a>

```java
public java.lang.Number getMaxPermissibleCvssV2ScoreInput();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleCvssV3ScoreInput`<sup>Optional</sup> <a name="maxPermissibleCvssV3ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput"></a>

```java
public java.lang.Number getMaxPermissibleCvssV3ScoreInput();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleSeverityInput`<sup>Optional</sup> <a name="maxPermissibleSeverityInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput"></a>

```java
public java.lang.String getMaxPermissibleSeverityInput();
```

- *Type:* java.lang.String

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput"></a>

```java
public java.lang.String getUpgradePolicyInput();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPermissibleCvssV2Score`<sup>Required</sup> <a name="maxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV2Score();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleCvssV3Score`<sup>Required</sup> <a name="maxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```java
public java.lang.Number getMaxPermissibleCvssV3Score();
```

- *Type:* java.lang.Number

---

##### `maxPermissibleSeverity`<sup>Required</sup> <a name="maxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```java
public java.lang.String getMaxPermissibleSeverity();
```

- *Type:* java.lang.String

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```java
public java.lang.String getUpgradePolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```java
public AdmRemediationRecipeDetectConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---


### AdmRemediationRecipeNetworkConfigurationOutputReference <a name="AdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeNetworkConfigurationOutputReference;

new AdmRemediationRecipeNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public AdmRemediationRecipeNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---


### AdmRemediationRecipeScmConfigurationOutputReference <a name="AdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeScmConfigurationOutputReference;

new AdmRemediationRecipeScmConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation">resetBuildFileLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType">resetExternalScmType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId">resetOciCodeRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId">resetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildFileLocation` <a name="resetBuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation"></a>

```java
public void resetBuildFileLocation()
```

##### `resetExternalScmType` <a name="resetExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType"></a>

```java
public void resetExternalScmType()
```

##### `resetOciCodeRepositoryId` <a name="resetOciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId"></a>

```java
public void resetOciCodeRepositoryId()
```

##### `resetPatSecretId` <a name="resetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId"></a>

```java
public void resetPatSecretId()
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput">buildFileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput">externalScmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput">isAutomergeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput">ociCodeRepositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput">patSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">buildFileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">externalScmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">isAutomergeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">ociCodeRepositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `buildFileLocationInput`<sup>Optional</sup> <a name="buildFileLocationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput"></a>

```java
public java.lang.String getBuildFileLocationInput();
```

- *Type:* java.lang.String

---

##### `externalScmTypeInput`<sup>Optional</sup> <a name="externalScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput"></a>

```java
public java.lang.String getExternalScmTypeInput();
```

- *Type:* java.lang.String

---

##### `isAutomergeEnabledInput`<sup>Optional</sup> <a name="isAutomergeEnabledInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput"></a>

```java
public java.lang.Object getIsAutomergeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ociCodeRepositoryIdInput`<sup>Optional</sup> <a name="ociCodeRepositoryIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput"></a>

```java
public java.lang.String getOciCodeRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `patSecretIdInput`<sup>Optional</sup> <a name="patSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput"></a>

```java
public java.lang.String getPatSecretIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput"></a>

```java
public java.lang.String getScmTypeInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `buildFileLocation`<sup>Required</sup> <a name="buildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```java
public java.lang.String getBuildFileLocation();
```

- *Type:* java.lang.String

---

##### `externalScmType`<sup>Required</sup> <a name="externalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```java
public java.lang.String getExternalScmType();
```

- *Type:* java.lang.String

---

##### `isAutomergeEnabled`<sup>Required</sup> <a name="isAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```java
public java.lang.Object getIsAutomergeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ociCodeRepositoryId`<sup>Required</sup> <a name="ociCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```java
public java.lang.String getOciCodeRepositoryId();
```

- *Type:* java.lang.String

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```java
public AdmRemediationRecipeScmConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---


### AdmRemediationRecipeTimeoutsOutputReference <a name="AdmRemediationRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeTimeoutsOutputReference;

new AdmRemediationRecipeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---


### AdmRemediationRecipeVerifyConfigurationOutputReference <a name="AdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.adm_remediation_recipe.AdmRemediationRecipeVerifyConfigurationOutputReference;

new AdmRemediationRecipeVerifyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters">resetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl">resetJenkinsUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId">resetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId">resetTriggerSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalParameters` <a name="resetAdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters"></a>

```java
public void resetAdditionalParameters()
```

##### `resetJenkinsUrl` <a name="resetJenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl"></a>

```java
public void resetJenkinsUrl()
```

##### `resetJobName` <a name="resetJobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName"></a>

```java
public void resetJobName()
```

##### `resetPatSecretId` <a name="resetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId"></a>

```java
public void resetPatSecretId()
```

##### `resetPipelineId` <a name="resetPipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId"></a>

```java
public void resetPipelineId()
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```

##### `resetTriggerSecretId` <a name="resetTriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId"></a>

```java
public void resetTriggerSecretId()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName"></a>

```java
public void resetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput">additionalParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput">buildServiceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput">jenkinsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput">patSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput">triggerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput">workflowNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">additionalParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">buildServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">jobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">patSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">triggerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalParametersInput`<sup>Optional</sup> <a name="additionalParametersInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildServiceTypeInput`<sup>Optional</sup> <a name="buildServiceTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput"></a>

```java
public java.lang.String getBuildServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `jenkinsUrlInput`<sup>Optional</sup> <a name="jenkinsUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput"></a>

```java
public java.lang.String getJenkinsUrlInput();
```

- *Type:* java.lang.String

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput"></a>

```java
public java.lang.String getJobNameInput();
```

- *Type:* java.lang.String

---

##### `patSecretIdInput`<sup>Optional</sup> <a name="patSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput"></a>

```java
public java.lang.String getPatSecretIdInput();
```

- *Type:* java.lang.String

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput"></a>

```java
public java.lang.String getPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `triggerSecretIdInput`<sup>Optional</sup> <a name="triggerSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput"></a>

```java
public java.lang.String getTriggerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput"></a>

```java
public java.lang.String getWorkflowNameInput();
```

- *Type:* java.lang.String

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildServiceType`<sup>Required</sup> <a name="buildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```java
public java.lang.String getBuildServiceType();
```

- *Type:* java.lang.String

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```java
public java.lang.String getJenkinsUrl();
```

- *Type:* java.lang.String

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

---

##### `patSecretId`<sup>Required</sup> <a name="patSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```java
public java.lang.String getPatSecretId();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `triggerSecretId`<sup>Required</sup> <a name="triggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```java
public java.lang.String getTriggerSecretId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```java
public AdmRemediationRecipeVerifyConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---



