# `dataOciBdsBdsInstanceResourcePrincipalConfigurations` Submodule <a name="`dataOciBdsBdsInstanceResourcePrincipalConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurations <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations oci_bds_bds_instance_resource_principal_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurations.Builder.create(Construct scope, java.lang.String id)
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
    .bdsInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#filter DataOciBdsBdsInstanceResourcePrincipalConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciBdsBdsInstanceResourcePrincipalConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciBdsBdsInstanceResourcePrincipalConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceResourcePrincipalConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.resourcePrincipalConfigurations">resourcePrincipalConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filter"></a>

```java
public DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList</a>

---

##### `resourcePrincipalConfigurations`<sup>Required</sup> <a name="resourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.resourcePrincipalConfigurations"></a>

```java
public DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList getResourcePrincipalConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig;

DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.builder()
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
    .bdsInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#filter DataOciBdsBdsInstanceResourcePrincipalConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}.

---

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter;

DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#name DataOciBdsBdsInstanceResourcePrincipalConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#values DataOciBdsBdsInstanceResourcePrincipalConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#regex DataOciBdsBdsInstanceResourcePrincipalConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#name DataOciBdsBdsInstanceResourcePrincipalConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#values DataOciBdsBdsInstanceResourcePrincipalConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#regex DataOciBdsBdsInstanceResourcePrincipalConfigurations#regex}.

---

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations;

DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList;

new DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get"></a>

```java
public DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>>

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference;

new DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList;

new DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get"></a>

```java
public DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_resource_principal_configurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference;

new DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenExpiry">timeTokenExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenRefreshed">timeTokenRefreshed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.forceRefreshResourcePrincipalTrigger"></a>

```java
public java.lang.Number getForceRefreshResourcePrincipalTrigger();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.sessionTokenLifeSpanDurationInHours"></a>

```java
public java.lang.Number getSessionTokenLifeSpanDurationInHours();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeTokenExpiry`<sup>Required</sup> <a name="timeTokenExpiry" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenExpiry"></a>

```java
public java.lang.String getTimeTokenExpiry();
```

- *Type:* java.lang.String

---

##### `timeTokenRefreshed`<sup>Required</sup> <a name="timeTokenRefreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenRefreshed"></a>

```java
public java.lang.String getTimeTokenRefreshed();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations</a>

---



