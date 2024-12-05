# `dataOciRecoveryProtectedDatabases` Submodule <a name="`dataOciRecoveryProtectedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabases <a name="DataOciRecoveryProtectedDatabases" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabases;

DataOciRecoveryProtectedDatabases.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciRecoveryProtectedDatabasesFilter>)
//  .id(java.lang.String)
//  .protectionPolicyId(java.lang.String)
//  .recoveryServiceSubnetId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.protectionPolicyId">protectionPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionPolicyId`<sup>Optional</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.protectionPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `recoveryServiceSubnetId`<sup>Optional</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.recoveryServiceSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId">resetProtectionPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId">resetRecoveryServiceSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciRecoveryProtectedDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId"></a>

```java
public void resetId()
```

##### `resetProtectionPolicyId` <a name="resetProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId"></a>

```java
public void resetProtectionPolicyId()
```

##### `resetRecoveryServiceSubnetId` <a name="resetRecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId"></a>

```java
public void resetRecoveryServiceSubnetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabases;

DataOciRecoveryProtectedDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabases;

DataOciRecoveryProtectedDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabases;

DataOciRecoveryProtectedDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabases;

DataOciRecoveryProtectedDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciRecoveryProtectedDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciRecoveryProtectedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciRecoveryProtectedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection">protectedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput">protectionPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput">recoveryServiceSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId">protectionPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter"></a>

```java
public DataOciRecoveryProtectedDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a>

---

##### `protectedDatabaseCollection`<sup>Required</sup> <a name="protectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList getProtectedDatabaseCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `protectionPolicyIdInput`<sup>Optional</sup> <a name="protectionPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput"></a>

```java
public java.lang.String getProtectionPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `recoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="recoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput"></a>

```java
public java.lang.String getRecoveryServiceSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId"></a>

```java
public java.lang.String getProtectionPolicyId();
```

- *Type:* java.lang.String

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId"></a>

```java
public java.lang.String getRecoveryServiceSubnetId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabasesConfig <a name="DataOciRecoveryProtectedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesConfig;

DataOciRecoveryProtectedDatabasesConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciRecoveryProtectedDatabasesFilter>)
//  .id(java.lang.String)
//  .protectionPolicyId(java.lang.String)
//  .recoveryServiceSubnetId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId">protectionPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionPolicyId`<sup>Optional</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId"></a>

```java
public java.lang.String getProtectionPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `recoveryServiceSubnetId`<sup>Optional</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId"></a>

```java
public java.lang.String getRecoveryServiceSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

### DataOciRecoveryProtectedDatabasesFilter <a name="DataOciRecoveryProtectedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesFilter;

DataOciRecoveryProtectedDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}.

---

### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection;

DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection.builder()
    .build();
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems;

DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems.builder()
    .build();
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics;

DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics.builder()
    .build();
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets;

DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabasesFilterList <a name="DataOciRecoveryProtectedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesFilterList;

new DataOciRecoveryProtectedDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get"></a>

```java
public DataOciRecoveryProtectedDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>>

---


### DataOciRecoveryProtectedDatabasesFilterOutputReference <a name="DataOciRecoveryProtectedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesFilterOutputReference;

new DataOciRecoveryProtectedDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs">backupSpaceEstimateInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs">backupSpaceUsedInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds">currentRetentionPeriodInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs">dbSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled">isRedoLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays">minimumRecoveryNeededInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds">unprotectedWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupSpaceEstimateInGbs`<sup>Required</sup> <a name="backupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```java
public java.lang.Number getBackupSpaceEstimateInGbs();
```

- *Type:* java.lang.Number

---

##### `backupSpaceUsedInGbs`<sup>Required</sup> <a name="backupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```java
public java.lang.Number getBackupSpaceUsedInGbs();
```

- *Type:* java.lang.Number

---

##### `currentRetentionPeriodInSeconds`<sup>Required</sup> <a name="currentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```java
public java.lang.Number getCurrentRetentionPeriodInSeconds();
```

- *Type:* java.lang.Number

---

##### `dbSizeInGbs`<sup>Required</sup> <a name="dbSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs"></a>

```java
public java.lang.Number getDbSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `isRedoLogsEnabled`<sup>Required</sup> <a name="isRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled"></a>

```java
public IResolvable getIsRedoLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `minimumRecoveryNeededInDays`<sup>Required</sup> <a name="minimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```java
public java.lang.Number getMinimumRecoveryNeededInDays();
```

- *Type:* java.lang.Number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays"></a>

```java
public java.lang.Number getRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `unprotectedWindowInSeconds`<sup>Required</sup> <a name="unprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```java
public java.lang.Number getUnprotectedWindowInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize">databaseSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule">deletionSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health">health</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails">healthDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource">isReadOnlyResource</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped">isRedoLogsShipped</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId">protectionPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets">recoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName">vpcUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseSize`<sup>Required</sup> <a name="databaseSize" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize"></a>

```java
public java.lang.String getDatabaseSize();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deletionSchedule`<sup>Required</sup> <a name="deletionSchedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule"></a>

```java
public java.lang.String getDeletionSchedule();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health"></a>

```java
public java.lang.String getHealth();
```

- *Type:* java.lang.String

---

##### `healthDetails`<sup>Required</sup> <a name="healthDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails"></a>

```java
public java.lang.String getHealthDetails();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isReadOnlyResource`<sup>Required</sup> <a name="isReadOnlyResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource"></a>

```java
public IResolvable getIsReadOnlyResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRedoLogsShipped`<sup>Required</sup> <a name="isRedoLogsShipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped"></a>

```java
public IResolvable getIsRedoLogsShipped();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `policyLockedDateTime`<sup>Required</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime"></a>

```java
public java.lang.String getPolicyLockedDateTime();
```

- *Type:* java.lang.String

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId"></a>

```java
public java.lang.String getProtectionPolicyId();
```

- *Type:* java.lang.String

---

##### `recoveryServiceSubnets`<sup>Required</sup> <a name="recoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList getRecoveryServiceSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vpcUserName`<sup>Required</sup> <a name="vpcUserName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName"></a>

```java
public java.lang.String getVpcUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```java
public java.lang.String getRecoveryServiceSubnetId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_recovery_protected_databases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference;

new DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue"></a>

```java
public DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a>

---



