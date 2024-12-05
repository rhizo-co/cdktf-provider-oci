# `apmConfigConfig` Submodule <a name="`apmConfigConfig` Submodule" id="rhizo-co-terraform-provider-oci.apmConfigConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmConfigConfig <a name="ApmConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config oci_apm_config_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfig;

ApmConfigConfig.Builder.create(Construct scope, java.lang.String id)
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
    .apmDomainId(java.lang.String)
    .configType(java.lang.String)
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ApmConfigConfigDimensions>)
//  .filterId(java.lang.String)
//  .filterText(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .inUseBy(IResolvable)
//  .inUseBy(java.util.List<ApmConfigConfigInUseBy>)
//  .metrics(IResolvable)
//  .metrics(java.util.List<ApmConfigConfigMetrics>)
//  .namespace(java.lang.String)
//  .opcDryRun(java.lang.String)
//  .options(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ApmConfigConfigRules>)
//  .timeouts(ApmConfigConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>></code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterId">filterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterText">filterText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.inUseBy">inUseBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>></code> | in_use_by block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.opcDryRun">opcDryRun</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.options">options</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}.

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.configType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.dimensions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}.

---

##### `filterText`<sup>Optional</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.filterText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}.

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inUseBy`<sup>Optional</sup> <a name="inUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.inUseBy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>>

in_use_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.metrics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}.

---

##### `opcDryRun`<sup>Optional</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.opcDryRun"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.options"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy">putInUseBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId">resetFilterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText">resetFilterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy">resetInUseBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun">resetOpcDryRun</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDimensions` <a name="putDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<ApmConfigConfigDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>>

---

##### `putInUseBy` <a name="putInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy"></a>

```java
public void putInUseBy(IResolvable OR java.util.List<ApmConfigConfigInUseBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>>

---

##### `putMetrics` <a name="putMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics"></a>

```java
public void putMetrics(IResolvable OR java.util.List<ApmConfigConfigMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>>

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<ApmConfigConfigRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts"></a>

```java
public void putTimeouts(ApmConfigConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetFilterId` <a name="resetFilterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId"></a>

```java
public void resetFilterId()
```

##### `resetFilterText` <a name="resetFilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText"></a>

```java
public void resetFilterText()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGroup` <a name="resetGroup" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInUseBy` <a name="resetInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy"></a>

```java
public void resetInUseBy()
```

##### `resetMetrics` <a name="resetMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOpcDryRun` <a name="resetOpcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun"></a>

```java
public void resetOpcDryRun()
```

##### `resetOptions` <a name="resetOptions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetRules` <a name="resetRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfig;

ApmConfigConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfig;

ApmConfigConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfig;

ApmConfigConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfig;

ApmConfigConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApmConfigConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApmConfigConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApmConfigConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApmConfigConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy">inUseBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput">configTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput">filterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput">filterTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput">inUseByInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput">metricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput">opcDryRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput">optionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId">filterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText">filterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun">opcDryRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions"></a>

```java
public ApmConfigConfigDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `inUseBy`<sup>Required</sup> <a name="inUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy"></a>

```java
public ApmConfigConfigInUseByList getInUseBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics"></a>

```java
public ApmConfigConfigMetricsList getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules"></a>

```java
public ApmConfigConfigRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts"></a>

```java
public ApmConfigConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput"></a>

```java
public java.lang.String getConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterIdInput`<sup>Optional</sup> <a name="filterIdInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput"></a>

```java
public java.lang.String getFilterIdInput();
```

- *Type:* java.lang.String

---

##### `filterTextInput`<sup>Optional</sup> <a name="filterTextInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput"></a>

```java
public java.lang.String getFilterTextInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inUseByInput`<sup>Optional</sup> <a name="inUseByInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput"></a>

```java
public java.lang.Object getInUseByInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>>

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput"></a>

```java
public java.lang.Object getMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `opcDryRunInput`<sup>Optional</sup> <a name="opcDryRunInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput"></a>

```java
public java.lang.String getOpcDryRunInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput"></a>

```java
public java.lang.String getOptionsInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun"></a>

```java
public java.lang.String getOpcDryRun();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApmConfigConfigConfig <a name="ApmConfigConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigConfig;

ApmConfigConfigConfig.builder()
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
    .apmDomainId(java.lang.String)
    .configType(java.lang.String)
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ApmConfigConfigDimensions>)
//  .filterId(java.lang.String)
//  .filterText(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .inUseBy(IResolvable)
//  .inUseBy(java.util.List<ApmConfigConfigInUseBy>)
//  .metrics(IResolvable)
//  .metrics(java.util.List<ApmConfigConfigMetrics>)
//  .namespace(java.lang.String)
//  .opcDryRun(java.lang.String)
//  .options(java.lang.String)
//  .rules(IResolvable)
//  .rules(java.util.List<ApmConfigConfigRules>)
//  .timeouts(ApmConfigConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>></code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId">filterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText">filterText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy">inUseBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>></code> | in_use_by block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun">opcDryRun</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options">options</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}.

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}

---

##### `filterId`<sup>Optional</sup> <a name="filterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}.

---

##### `filterText`<sup>Optional</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}.

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inUseBy`<sup>Optional</sup> <a name="inUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy"></a>

```java
public java.lang.Object getInUseBy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>>

in_use_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics"></a>

```java
public java.lang.Object getMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}.

---

##### `opcDryRun`<sup>Optional</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun"></a>

```java
public java.lang.String getOpcDryRun();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts"></a>

```java
public ApmConfigConfigTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}

---

### ApmConfigConfigDimensions <a name="ApmConfigConfigDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigDimensions;

ApmConfigConfigDimensions.builder()
//  .name(java.lang.String)
//  .valueSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigInUseBy <a name="ApmConfigConfigInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigInUseBy;

ApmConfigConfigInUseBy.builder()
    .build();
```


### ApmConfigConfigMetrics <a name="ApmConfigConfigMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigMetrics;

ApmConfigConfigMetrics.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .unit(java.lang.String)
//  .valueSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}.

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigRules <a name="ApmConfigConfigRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigRules;

ApmConfigConfigRules.builder()
//  .displayName(java.lang.String)
//  .filterText(java.lang.String)
//  .isApplyToErrorSpans(java.lang.Boolean)
//  .isApplyToErrorSpans(IResolvable)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .priority(java.lang.Number)
//  .satisfiedResponseTime(java.lang.Number)
//  .toleratingResponseTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText">filterText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans">isApplyToErrorSpans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime">satisfiedResponseTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime">toleratingResponseTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `filterText`<sup>Optional</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `isApplyToErrorSpans`<sup>Optional</sup> <a name="isApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans"></a>

```java
public java.lang.Object getIsApplyToErrorSpans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}.

---

##### `satisfiedResponseTime`<sup>Optional</sup> <a name="satisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime"></a>

```java
public java.lang.Number getSatisfiedResponseTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}.

---

##### `toleratingResponseTime`<sup>Optional</sup> <a name="toleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime"></a>

```java
public java.lang.Number getToleratingResponseTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}.

---

### ApmConfigConfigTimeouts <a name="ApmConfigConfigTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigTimeouts;

ApmConfigConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmConfigConfigDimensionsList <a name="ApmConfigConfigDimensionsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigDimensionsList;

new ApmConfigConfigDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get"></a>

```java
public ApmConfigConfigDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>>

---


### ApmConfigConfigDimensionsOutputReference <a name="ApmConfigConfigDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigDimensionsOutputReference;

new ApmConfigConfigDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueSource` <a name="resetValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource"></a>

```java
public void resetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput"></a>

```java
public java.lang.String getValueSourceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions">ApmConfigConfigDimensions</a>

---


### ApmConfigConfigInUseByList <a name="ApmConfigConfigInUseByList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigInUseByList;

new ApmConfigConfigInUseByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get"></a>

```java
public ApmConfigConfigInUseByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>>

---


### ApmConfigConfigInUseByOutputReference <a name="ApmConfigConfigInUseByOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigInUseByOutputReference;

new ApmConfigConfigInUseByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup">optionsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionsGroup`<sup>Required</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup"></a>

```java
public java.lang.String getOptionsGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy">ApmConfigConfigInUseBy</a>

---


### ApmConfigConfigMetricsList <a name="ApmConfigConfigMetricsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigMetricsList;

new ApmConfigConfigMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get"></a>

```java
public ApmConfigConfigMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>>

---


### ApmConfigConfigMetricsOutputReference <a name="ApmConfigConfigMetricsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigMetricsOutputReference;

new ApmConfigConfigMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetUnit` <a name="resetUnit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValueSource` <a name="resetValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource"></a>

```java
public void resetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput"></a>

```java
public java.lang.String getValueSourceInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics">ApmConfigConfigMetrics</a>

---


### ApmConfigConfigRulesList <a name="ApmConfigConfigRulesList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigRulesList;

new ApmConfigConfigRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get"></a>

```java
public ApmConfigConfigRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>>

---


### ApmConfigConfigRulesOutputReference <a name="ApmConfigConfigRulesOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigRulesOutputReference;

new ApmConfigConfigRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText">resetFilterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans">resetIsApplyToErrorSpans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime">resetSatisfiedResponseTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime">resetToleratingResponseTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilterText` <a name="resetFilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText"></a>

```java
public void resetFilterText()
```

##### `resetIsApplyToErrorSpans` <a name="resetIsApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans"></a>

```java
public void resetIsApplyToErrorSpans()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSatisfiedResponseTime` <a name="resetSatisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime"></a>

```java
public void resetSatisfiedResponseTime()
```

##### `resetToleratingResponseTime` <a name="resetToleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime"></a>

```java
public void resetToleratingResponseTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput">filterTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput">isApplyToErrorSpansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput">satisfiedResponseTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput">toleratingResponseTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText">filterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans">isApplyToErrorSpans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime">satisfiedResponseTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime">toleratingResponseTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterTextInput`<sup>Optional</sup> <a name="filterTextInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput"></a>

```java
public java.lang.String getFilterTextInput();
```

- *Type:* java.lang.String

---

##### `isApplyToErrorSpansInput`<sup>Optional</sup> <a name="isApplyToErrorSpansInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput"></a>

```java
public java.lang.Object getIsApplyToErrorSpansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `satisfiedResponseTimeInput`<sup>Optional</sup> <a name="satisfiedResponseTimeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput"></a>

```java
public java.lang.Number getSatisfiedResponseTimeInput();
```

- *Type:* java.lang.Number

---

##### `toleratingResponseTimeInput`<sup>Optional</sup> <a name="toleratingResponseTimeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput"></a>

```java
public java.lang.Number getToleratingResponseTimeInput();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

---

##### `isApplyToErrorSpans`<sup>Required</sup> <a name="isApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans"></a>

```java
public java.lang.Object getIsApplyToErrorSpans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `satisfiedResponseTime`<sup>Required</sup> <a name="satisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime"></a>

```java
public java.lang.Number getSatisfiedResponseTime();
```

- *Type:* java.lang.Number

---

##### `toleratingResponseTime`<sup>Required</sup> <a name="toleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime"></a>

```java
public java.lang.Number getToleratingResponseTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules">ApmConfigConfigRules</a>

---


### ApmConfigConfigTimeoutsOutputReference <a name="ApmConfigConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_config_config.ApmConfigConfigTimeoutsOutputReference;

new ApmConfigConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

---



