# `dataOciWaasCustomProtectionRules` Submodule <a name="`dataOciWaasCustomProtectionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasCustomProtectionRules <a name="DataOciWaasCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules oci_waas_custom_protection_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRules;

DataOciWaasCustomProtectionRules.Builder.create(Construct scope, java.lang.String id)
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
//  .displayNames(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWaasCustomProtectionRulesFilter>)
//  .id(java.lang.String)
//  .ids(java.util.List<java.lang.String>)
//  .states(java.util.List<java.lang.String>)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#compartment_id DataOciWaasCustomProtectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#display_names DataOciWaasCustomProtectionRules#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#id DataOciWaasCustomProtectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#ids DataOciWaasCustomProtectionRules#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.states">states</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#states DataOciWaasCustomProtectionRules#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_greater_than_or_equal_to DataOciWaasCustomProtectionRules#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_less_than DataOciWaasCustomProtectionRules#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#compartment_id DataOciWaasCustomProtectionRules#compartment_id}.

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.displayNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#display_names DataOciWaasCustomProtectionRules#display_names}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#filter DataOciWaasCustomProtectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#id DataOciWaasCustomProtectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.ids"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#ids DataOciWaasCustomProtectionRules#ids}.

---

##### `states`<sup>Optional</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.states"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#states DataOciWaasCustomProtectionRules#states}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_greater_than_or_equal_to DataOciWaasCustomProtectionRules#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_less_than DataOciWaasCustomProtectionRules#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetDisplayNames">resetDisplayNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetStates">resetStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciWaasCustomProtectionRulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>>

---

##### `resetDisplayNames` <a name="resetDisplayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetDisplayNames"></a>

```java
public void resetDisplayNames()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetId"></a>

```java
public void resetId()
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetIds"></a>

```java
public void resetIds()
```

##### `resetStates` <a name="resetStates" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetStates"></a>

```java
public void resetStates()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasCustomProtectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRules;

DataOciWaasCustomProtectionRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRules;

DataOciWaasCustomProtectionRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRules;

DataOciWaasCustomProtectionRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRules;

DataOciWaasCustomProtectionRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciWaasCustomProtectionRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciWaasCustomProtectionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciWaasCustomProtectionRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciWaasCustomProtectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasCustomProtectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.customProtectionRules">customProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList">DataOciWaasCustomProtectionRulesCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList">DataOciWaasCustomProtectionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.displayNamesInput">displayNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.statesInput">statesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.states">states</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `customProtectionRules`<sup>Required</sup> <a name="customProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.customProtectionRules"></a>

```java
public DataOciWaasCustomProtectionRulesCustomProtectionRulesList getCustomProtectionRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList">DataOciWaasCustomProtectionRulesCustomProtectionRulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.filter"></a>

```java
public DataOciWaasCustomProtectionRulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList">DataOciWaasCustomProtectionRulesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.displayNamesInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statesInput`<sup>Optional</sup> <a name="statesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.statesInput"></a>

```java
public java.util.List<java.lang.String> getStatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `states`<sup>Required</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.states"></a>

```java
public java.util.List<java.lang.String> getStates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasCustomProtectionRulesConfig <a name="DataOciWaasCustomProtectionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesConfig;

DataOciWaasCustomProtectionRulesConfig.builder()
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
//  .displayNames(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWaasCustomProtectionRulesFilter>)
//  .id(java.lang.String)
//  .ids(java.util.List<java.lang.String>)
//  .states(java.util.List<java.lang.String>)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#compartment_id DataOciWaasCustomProtectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.displayNames">displayNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#display_names DataOciWaasCustomProtectionRules#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#id DataOciWaasCustomProtectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#ids DataOciWaasCustomProtectionRules#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.states">states</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#states DataOciWaasCustomProtectionRules#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_greater_than_or_equal_to DataOciWaasCustomProtectionRules#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_less_than DataOciWaasCustomProtectionRules#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#compartment_id DataOciWaasCustomProtectionRules#compartment_id}.

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.displayNames"></a>

```java
public java.util.List<java.lang.String> getDisplayNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#display_names DataOciWaasCustomProtectionRules#display_names}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#filter DataOciWaasCustomProtectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#id DataOciWaasCustomProtectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#ids DataOciWaasCustomProtectionRules#ids}.

---

##### `states`<sup>Optional</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.states"></a>

```java
public java.util.List<java.lang.String> getStates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#states DataOciWaasCustomProtectionRules#states}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_greater_than_or_equal_to DataOciWaasCustomProtectionRules#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#time_created_less_than DataOciWaasCustomProtectionRules#time_created_less_than}.

---

### DataOciWaasCustomProtectionRulesCustomProtectionRules <a name="DataOciWaasCustomProtectionRulesCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesCustomProtectionRules;

DataOciWaasCustomProtectionRulesCustomProtectionRules.builder()
    .build();
```


### DataOciWaasCustomProtectionRulesFilter <a name="DataOciWaasCustomProtectionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesFilter;

DataOciWaasCustomProtectionRulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#name DataOciWaasCustomProtectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#values DataOciWaasCustomProtectionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#regex DataOciWaasCustomProtectionRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#name DataOciWaasCustomProtectionRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#values DataOciWaasCustomProtectionRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_custom_protection_rules#regex DataOciWaasCustomProtectionRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasCustomProtectionRulesCustomProtectionRulesList <a name="DataOciWaasCustomProtectionRulesCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList;

new DataOciWaasCustomProtectionRulesCustomProtectionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.get"></a>

```java
public DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference <a name="DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference;

new DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.modSecurityRuleIds">modSecurityRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRules">DataOciWaasCustomProtectionRulesCustomProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modSecurityRuleIds`<sup>Required</sup> <a name="modSecurityRuleIds" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.modSecurityRuleIds"></a>

```java
public java.util.List<java.lang.String> getModSecurityRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRulesOutputReference.property.internalValue"></a>

```java
public DataOciWaasCustomProtectionRulesCustomProtectionRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesCustomProtectionRules">DataOciWaasCustomProtectionRulesCustomProtectionRules</a>

---


### DataOciWaasCustomProtectionRulesFilterList <a name="DataOciWaasCustomProtectionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesFilterList;

new DataOciWaasCustomProtectionRulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.get"></a>

```java
public DataOciWaasCustomProtectionRulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>>

---


### DataOciWaasCustomProtectionRulesFilterOutputReference <a name="DataOciWaasCustomProtectionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waas_custom_protection_rules.DataOciWaasCustomProtectionRulesFilterOutputReference;

new DataOciWaasCustomProtectionRulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWaasCustomProtectionRules.DataOciWaasCustomProtectionRulesFilter">DataOciWaasCustomProtectionRulesFilter</a>

---



