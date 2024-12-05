# `dataOciApmConfigConfigs` Submodule <a name="`dataOciApmConfigConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmConfigConfigs <a name="DataOciApmConfigConfigs" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs oci_apm_config_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigs;

DataOciApmConfigConfigs.Builder.create(Construct scope, java.lang.String id)
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
//  .configType(java.lang.String)
//  .definedTagEquals(java.util.List<java.lang.String>)
//  .definedTagExists(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciApmConfigConfigsFilter>)
//  .freeformTagEquals(java.util.List<java.lang.String>)
//  .freeformTagExists(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .optionsGroup(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.definedTagEquals">definedTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.definedTagExists">definedTagExists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.freeformTagEquals">freeformTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.freeformTagExists">freeformTagExists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.optionsGroup">optionsGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}.

---

##### `configType`<sup>Optional</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.configType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}.

---

##### `definedTagEquals`<sup>Optional</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.definedTagEquals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}.

---

##### `definedTagExists`<sup>Optional</sup> <a name="definedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.definedTagExists"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#filter DataOciApmConfigConfigs#filter}

---

##### `freeformTagEquals`<sup>Optional</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.freeformTagEquals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}.

---

##### `freeformTagExists`<sup>Optional</sup> <a name="freeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.freeformTagExists"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionsGroup`<sup>Optional</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.Initializer.parameter.optionsGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetConfigType">resetConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagEquals">resetDefinedTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagExists">resetDefinedTagExists</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagEquals">resetFreeformTagEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagExists">resetFreeformTagExists</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOptionsGroup">resetOptionsGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciApmConfigConfigsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>>

---

##### `resetConfigType` <a name="resetConfigType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetConfigType"></a>

```java
public void resetConfigType()
```

##### `resetDefinedTagEquals` <a name="resetDefinedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagEquals"></a>

```java
public void resetDefinedTagEquals()
```

##### `resetDefinedTagExists` <a name="resetDefinedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDefinedTagExists"></a>

```java
public void resetDefinedTagExists()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFreeformTagEquals` <a name="resetFreeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagEquals"></a>

```java
public void resetFreeformTagEquals()
```

##### `resetFreeformTagExists` <a name="resetFreeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetFreeformTagExists"></a>

```java
public void resetFreeformTagExists()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetId"></a>

```java
public void resetId()
```

##### `resetOptionsGroup` <a name="resetOptionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.resetOptionsGroup"></a>

```java
public void resetOptionsGroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmConfigConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigs;

DataOciApmConfigConfigs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigs;

DataOciApmConfigConfigs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigs;

DataOciApmConfigConfigs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigs;

DataOciApmConfigConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciApmConfigConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciApmConfigConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciApmConfigConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciApmConfigConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmConfigConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configCollection">configCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList">DataOciApmConfigConfigsConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList">DataOciApmConfigConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configTypeInput">configTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEqualsInput">definedTagEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExistsInput">definedTagExistsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEqualsInput">freeformTagEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExistsInput">freeformTagExistsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroupInput">optionsGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEquals">definedTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExists">definedTagExists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEquals">freeformTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExists">freeformTagExists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroup">optionsGroup</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `configCollection`<sup>Required</sup> <a name="configCollection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configCollection"></a>

```java
public DataOciApmConfigConfigsConfigCollectionList getConfigCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList">DataOciApmConfigConfigsConfigCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filter"></a>

```java
public DataOciApmConfigConfigsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList">DataOciApmConfigConfigsFilterList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configTypeInput"></a>

```java
public java.lang.String getConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `definedTagEqualsInput`<sup>Optional</sup> <a name="definedTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEqualsInput"></a>

```java
public java.util.List<java.lang.String> getDefinedTagEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagExistsInput`<sup>Optional</sup> <a name="definedTagExistsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExistsInput"></a>

```java
public java.util.List<java.lang.String> getDefinedTagExistsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>>

---

##### `freeformTagEqualsInput`<sup>Optional</sup> <a name="freeformTagEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEqualsInput"></a>

```java
public java.util.List<java.lang.String> getFreeformTagEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagExistsInput`<sup>Optional</sup> <a name="freeformTagExistsInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExistsInput"></a>

```java
public java.util.List<java.lang.String> getFreeformTagExistsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `optionsGroupInput`<sup>Optional</sup> <a name="optionsGroupInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroupInput"></a>

```java
public java.lang.String getOptionsGroupInput();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `definedTagEquals`<sup>Required</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagEquals"></a>

```java
public java.util.List<java.lang.String> getDefinedTagEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagExists`<sup>Required</sup> <a name="definedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.definedTagExists"></a>

```java
public java.util.List<java.lang.String> getDefinedTagExists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTagEquals`<sup>Required</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagEquals"></a>

```java
public java.util.List<java.lang.String> getFreeformTagEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagExists`<sup>Required</sup> <a name="freeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.freeformTagExists"></a>

```java
public java.util.List<java.lang.String> getFreeformTagExists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionsGroup`<sup>Required</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.optionsGroup"></a>

```java
public java.lang.String getOptionsGroup();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmConfigConfigsConfig <a name="DataOciApmConfigConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfig;

DataOciApmConfigConfigsConfig.builder()
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
//  .configType(java.lang.String)
//  .definedTagEquals(java.util.List<java.lang.String>)
//  .definedTagExists(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciApmConfigConfigsFilter>)
//  .freeformTagEquals(java.util.List<java.lang.String>)
//  .freeformTagExists(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .optionsGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagEquals">definedTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagExists">definedTagExists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagEquals">freeformTagEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagExists">freeformTagExists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.optionsGroup">optionsGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}.

---

##### `configType`<sup>Optional</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}.

---

##### `definedTagEquals`<sup>Optional</sup> <a name="definedTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagEquals"></a>

```java
public java.util.List<java.lang.String> getDefinedTagEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}.

---

##### `definedTagExists`<sup>Optional</sup> <a name="definedTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.definedTagExists"></a>

```java
public java.util.List<java.lang.String> getDefinedTagExists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#filter DataOciApmConfigConfigs#filter}

---

##### `freeformTagEquals`<sup>Optional</sup> <a name="freeformTagEquals" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagEquals"></a>

```java
public java.util.List<java.lang.String> getFreeformTagEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}.

---

##### `freeformTagExists`<sup>Optional</sup> <a name="freeformTagExists" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.freeformTagExists"></a>

```java
public java.util.List<java.lang.String> getFreeformTagExists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionsGroup`<sup>Optional</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfig.property.optionsGroup"></a>

```java
public java.lang.String getOptionsGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}.

---

### DataOciApmConfigConfigsConfigCollection <a name="DataOciApmConfigConfigsConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollection;

DataOciApmConfigConfigsConfigCollection.builder()
    .build();
```


### DataOciApmConfigConfigsConfigCollectionItems <a name="DataOciApmConfigConfigsConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItems;

DataOciApmConfigConfigsConfigCollectionItems.builder()
    .build();
```


### DataOciApmConfigConfigsConfigCollectionItemsDimensions <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsDimensions;

DataOciApmConfigConfigsConfigCollectionItemsDimensions.builder()
    .build();
```


### DataOciApmConfigConfigsConfigCollectionItemsInUseBy <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy;

DataOciApmConfigConfigsConfigCollectionItemsInUseBy.builder()
    .build();
```


### DataOciApmConfigConfigsConfigCollectionItemsMetrics <a name="DataOciApmConfigConfigsConfigCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsMetrics;

DataOciApmConfigConfigsConfigCollectionItemsMetrics.builder()
    .build();
```


### DataOciApmConfigConfigsConfigCollectionItemsRules <a name="DataOciApmConfigConfigsConfigCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsRules;

DataOciApmConfigConfigsConfigCollectionItemsRules.builder()
    .build();
```


### DataOciApmConfigConfigsFilter <a name="DataOciApmConfigConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsFilter;

DataOciApmConfigConfigsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#name DataOciApmConfigConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#values DataOciApmConfigConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#regex DataOciApmConfigConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#name DataOciApmConfigConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#values DataOciApmConfigConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_config_configs#regex DataOciApmConfigConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmConfigConfigsConfigCollectionItemsDimensionsList <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList;

new DataOciApmConfigConfigsConfigCollectionItemsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference;

new DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions">DataOciApmConfigConfigsConfigCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsDimensions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensions">DataOciApmConfigConfigsConfigCollectionItemsDimensions</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsInUseByList <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseByList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList;

new DataOciApmConfigConfigsConfigCollectionItemsInUseByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference;

new DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.optionsGroup">optionsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy">DataOciApmConfigConfigsConfigCollectionItemsInUseBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionsGroup`<sup>Required</sup> <a name="optionsGroup" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.optionsGroup"></a>

```java
public java.lang.String getOptionsGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsInUseBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseBy">DataOciApmConfigConfigsConfigCollectionItemsInUseBy</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsList <a name="DataOciApmConfigConfigsConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsList;

new DataOciApmConfigConfigsConfigCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionItemsMetricsList <a name="DataOciApmConfigConfigsConfigCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList;

new DataOciApmConfigConfigsConfigCollectionItemsMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference;

new DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.valueSource">valueSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics">DataOciApmConfigConfigsConfigCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.valueSource"></a>

```java
public java.lang.String getValueSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetrics">DataOciApmConfigConfigsConfigCollectionItemsMetrics</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference;

new DataOciApmConfigConfigsConfigCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList">DataOciApmConfigConfigsConfigCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterId">filterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterText">filterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.inUseBy">inUseBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList">DataOciApmConfigConfigsConfigCollectionItemsInUseByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList">DataOciApmConfigConfigsConfigCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.opcDryRun">opcDryRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList">DataOciApmConfigConfigsConfigCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems">DataOciApmConfigConfigsConfigCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.dimensions"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsDimensionsList">DataOciApmConfigConfigsConfigCollectionItemsDimensionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inUseBy`<sup>Required</sup> <a name="inUseBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.inUseBy"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsInUseByList getInUseBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsInUseByList">DataOciApmConfigConfigsConfigCollectionItemsInUseByList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.metrics"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsMetricsList getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsMetricsList">DataOciApmConfigConfigsConfigCollectionItemsMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.opcDryRun"></a>

```java
public java.lang.String getOpcDryRun();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.rules"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList">DataOciApmConfigConfigsConfigCollectionItemsRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItems">DataOciApmConfigConfigsConfigCollectionItems</a>

---


### DataOciApmConfigConfigsConfigCollectionItemsRulesList <a name="DataOciApmConfigConfigsConfigCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsRulesList;

new DataOciApmConfigConfigsConfigCollectionItemsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference <a name="DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference;

new DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.filterText">filterText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isApplyToErrorSpans">isApplyToErrorSpans</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.satisfiedResponseTime">satisfiedResponseTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.toleratingResponseTime">toleratingResponseTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules">DataOciApmConfigConfigsConfigCollectionItemsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterText`<sup>Required</sup> <a name="filterText" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.filterText"></a>

```java
public java.lang.String getFilterText();
```

- *Type:* java.lang.String

---

##### `isApplyToErrorSpans`<sup>Required</sup> <a name="isApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isApplyToErrorSpans"></a>

```java
public IResolvable getIsApplyToErrorSpans();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `satisfiedResponseTime`<sup>Required</sup> <a name="satisfiedResponseTime" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.satisfiedResponseTime"></a>

```java
public java.lang.Number getSatisfiedResponseTime();
```

- *Type:* java.lang.Number

---

##### `toleratingResponseTime`<sup>Required</sup> <a name="toleratingResponseTime" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.toleratingResponseTime"></a>

```java
public java.lang.Number getToleratingResponseTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsRules">DataOciApmConfigConfigsConfigCollectionItemsRules</a>

---


### DataOciApmConfigConfigsConfigCollectionList <a name="DataOciApmConfigConfigsConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionList;

new DataOciApmConfigConfigsConfigCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get"></a>

```java
public DataOciApmConfigConfigsConfigCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmConfigConfigsConfigCollectionOutputReference <a name="DataOciApmConfigConfigsConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsConfigCollectionOutputReference;

new DataOciApmConfigConfigsConfigCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList">DataOciApmConfigConfigsConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection">DataOciApmConfigConfigsConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.items"></a>

```java
public DataOciApmConfigConfigsConfigCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionItemsList">DataOciApmConfigConfigsConfigCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollectionOutputReference.property.internalValue"></a>

```java
public DataOciApmConfigConfigsConfigCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsConfigCollection">DataOciApmConfigConfigsConfigCollection</a>

---


### DataOciApmConfigConfigsFilterList <a name="DataOciApmConfigConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsFilterList;

new DataOciApmConfigConfigsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get"></a>

```java
public DataOciApmConfigConfigsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>>

---


### DataOciApmConfigConfigsFilterOutputReference <a name="DataOciApmConfigConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_config_configs.DataOciApmConfigConfigsFilterOutputReference;

new DataOciApmConfigConfigsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciApmConfigConfigs.DataOciApmConfigConfigsFilter">DataOciApmConfigConfigsFilter</a>

---



