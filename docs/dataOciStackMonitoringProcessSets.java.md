# `dataOciStackMonitoringProcessSets` Submodule <a name="`dataOciStackMonitoringProcessSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringProcessSets <a name="DataOciStackMonitoringProcessSets" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets oci_stack_monitoring_process_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSets;

DataOciStackMonitoringProcessSets.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciStackMonitoringProcessSetsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#compartment_id DataOciStackMonitoringProcessSets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#display_name DataOciStackMonitoringProcessSets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#id DataOciStackMonitoringProcessSets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#compartment_id DataOciStackMonitoringProcessSets#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#display_name DataOciStackMonitoringProcessSets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#filter DataOciStackMonitoringProcessSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#id DataOciStackMonitoringProcessSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringProcessSetsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringProcessSets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSets;

DataOciStackMonitoringProcessSets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSets;

DataOciStackMonitoringProcessSets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSets;

DataOciStackMonitoringProcessSets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSets;

DataOciStackMonitoringProcessSets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringProcessSets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringProcessSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringProcessSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringProcessSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringProcessSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList">DataOciStackMonitoringProcessSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.processSetCollection">processSetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList">DataOciStackMonitoringProcessSetsProcessSetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.filter"></a>

```java
public DataOciStackMonitoringProcessSetsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList">DataOciStackMonitoringProcessSetsFilterList</a>

---

##### `processSetCollection`<sup>Required</sup> <a name="processSetCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.processSetCollection"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionList getProcessSetCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList">DataOciStackMonitoringProcessSetsProcessSetCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringProcessSetsConfig <a name="DataOciStackMonitoringProcessSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsConfig;

DataOciStackMonitoringProcessSetsConfig.builder()
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
//  .filter(java.util.List<DataOciStackMonitoringProcessSetsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#compartment_id DataOciStackMonitoringProcessSets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#display_name DataOciStackMonitoringProcessSets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#id DataOciStackMonitoringProcessSets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#compartment_id DataOciStackMonitoringProcessSets#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#display_name DataOciStackMonitoringProcessSets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#filter DataOciStackMonitoringProcessSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#id DataOciStackMonitoringProcessSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciStackMonitoringProcessSetsFilter <a name="DataOciStackMonitoringProcessSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsFilter;

DataOciStackMonitoringProcessSetsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#name DataOciStackMonitoringProcessSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#values DataOciStackMonitoringProcessSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#regex DataOciStackMonitoringProcessSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#name DataOciStackMonitoringProcessSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#values DataOciStackMonitoringProcessSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_process_sets#regex DataOciStackMonitoringProcessSets#regex}.

---

### DataOciStackMonitoringProcessSetsProcessSetCollection <a name="DataOciStackMonitoringProcessSetsProcessSetCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollection;

DataOciStackMonitoringProcessSetsProcessSetCollection.builder()
    .build();
```


### DataOciStackMonitoringProcessSetsProcessSetCollectionItems <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItems;

DataOciStackMonitoringProcessSetsProcessSetCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification;

DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification.builder()
    .build();
```


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems;

DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringProcessSetsFilterList <a name="DataOciStackMonitoringProcessSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsFilterList;

new DataOciStackMonitoringProcessSetsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.get"></a>

```java
public DataOciStackMonitoringProcessSetsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>>

---


### DataOciStackMonitoringProcessSetsFilterOutputReference <a name="DataOciStackMonitoringProcessSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsFilterOutputReference;

new DataOciStackMonitoringProcessSetsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsFilter">DataOciStackMonitoringProcessSetsFilter</a>

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.specification">specification</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItems">DataOciStackMonitoringProcessSetsProcessSetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `specification`<sup>Required</sup> <a name="specification" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.specification"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList getSpecification();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItems">DataOciStackMonitoringProcessSetsProcessSetCollectionItems</a>

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.get"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processCommand">processCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processLineRegexPattern">processLineRegexPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processUser">processUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `processCommand`<sup>Required</sup> <a name="processCommand" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processCommand"></a>

```java
public java.lang.String getProcessCommand();
```

- *Type:* java.lang.String

---

##### `processLineRegexPattern`<sup>Required</sup> <a name="processLineRegexPattern" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processLineRegexPattern"></a>

```java
public java.lang.String getProcessLineRegexPattern();
```

- *Type:* java.lang.String

---

##### `processUser`<sup>Required</sup> <a name="processUser" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.processUser"></a>

```java
public java.lang.String getProcessUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItems</a>

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.get"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference;

new DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.items"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecificationOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsSpecification</a>

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionList <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionList;

new DataOciStackMonitoringProcessSetsProcessSetCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.get"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference <a name="DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_process_sets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference;

new DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollection">DataOciStackMonitoringProcessSetsProcessSetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList">DataOciStackMonitoringProcessSetsProcessSetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringProcessSetsProcessSetCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringProcessSets.DataOciStackMonitoringProcessSetsProcessSetCollection">DataOciStackMonitoringProcessSetsProcessSetCollection</a>

---



